import React, { useState, useEffect } from 'react';
import './timePicker.css'; // Стилизация через отдельный CSS файл

const TimerPicker = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = Array.from({ length: 60 }, (_, index) => ({
    value: index + 1,
    label: index + 1,
  }));

  // Обработчик скролла для select элемента
  const handleScroll = (event) => {
    const index = Math.round(
      event.target.scrollTop / (event.target.offsetHeight / 5)
    );
    setSelectedIndex(index);
  };

  useEffect(() => {
    const selectElement = document.querySelector('.custom-select select');
    selectElement.scrollTop = selectedIndex * (selectElement.offsetHeight / 5);
  }, [selectedIndex]);

  return (
    <div className="custom-select">
      <select
        size="5"
        onScroll={handleScroll}
        value={options[selectedIndex].value}
        onChange={(e) =>
          setSelectedIndex(
            options.findIndex((opt) => opt.value.toString() === e.target.value)
          )
        }
      >
        {options.map((option, index) => (
          <option
            key={option.value}
            value={option.value}
            style={getOptionStyle(index, selectedIndex)}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Вспомогательная функция для стилизации опций
const getOptionStyle = (index, selectedIndex) => {
  const distance = Math.abs(selectedIndex - index);
  switch (distance) {
    case 0:
      return { fontSize: '30px' };
    case 1:
    case 3:
      return { fontSize: '20px' };
    case 2:
    case 4:
      return { fontSize: '10px' };
    default:
      return {}; // для опций вне видимой области
  }
};

export default TimerPicker;
