import React, { useState, useEffect } from 'react';

function Clock(props) {
  const [currentIntervalIndex, setCurrentIntervalIndex] = useState(0);

  const [secondsLeft, setSecondsLeft] = useState(
    props.intervals[currentIntervalIndex]
  );

  useEffect(() => {
    // Если оставшееся время больше 0, устанавливаем таймер
    if (secondsLeft > 0) {
      if (props.pause === false) {
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    } else {
      alert('aleee');
      const nextIndex = (currentIntervalIndex + 1) % props.intervals.length;
      setCurrentIntervalIndex(nextIndex);
      setSecondsLeft(props.intervals[nextIndex]);
    }
  }, [secondsLeft, currentIntervalIndex, props.intervals]);

  // Функция для форматирования времени из секунд в минуты:секунды
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h2>
        Текущий интервал: {currentIntervalIndex % 2 === 0 ? 'Работа' : 'Отдых'}
      </h2>
      <h2>Оставшееся время: {formatTime(secondsLeft)}</h2>
    </div>
  );
}
export default Clock;
