import React, { useState } from 'react';
import './timePicker.css'; // Убедитесь, что вы создали этот CSS файл и добавили в него стили

const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState('12:00');

  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0')
  ).filter((_, i) => i % 1 === 0); // Пример с интервалом в 5 минут

  const handleTimeChange = (hour, minute) => {
    setSelectedTime(`${hour}:${minute}`);
  };

  return (
    <div className="time-picker">
      <div className="time-picker-column">
        {minutes.map((minute) => (
          <div
            key={minute}
            className={`time-picker-item ${
              selectedTime.endsWith(minute) ? 'selected' : ''
            }`}
            onClick={() => handleTimeChange(selectedTime.slice(0, 2), minute)}
          >
            {minute}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
