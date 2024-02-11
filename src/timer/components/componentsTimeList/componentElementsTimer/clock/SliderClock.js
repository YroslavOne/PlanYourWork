import React, { useState, useRef, useEffect } from 'react';

const CircularSlider = ({ radius, strokeWidth }) => {
  const [angle, setAngle] = useState(0);
  const sliderRef = useRef(null);

  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (angle / 360) * circumference;

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const handleMouseMove = (event) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    const dx = event.clientX - center.x;
    const dy = event.clientY - center.y;
    let theta = Math.atan2(dy, dx) * (180 / Math.PI);
    if (theta < 0) {
      theta += 360;
    }
    setAngle(theta);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const sliderStyles = {
    fill: 'none',
    stroke: 'blue',
    strokeWidth: strokeWidth,
  };

  const center = radius + strokeWidth;
  const startCoord = polarToCartesian(center, center, radius, 0);
  const endCoord = polarToCartesian(center, center, radius, angle);

  return (
    <svg
      height={center * 2}
      width={center * 2}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        stroke="grey"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      <path
        d={`
          M ${startCoord.x} ${startCoord.y}
          A ${radius} ${radius} 0 ${angle > 180 ? 1 : 0} 1 ${endCoord.x} ${
          endCoord.y
        }
        `}
        style={sliderStyles}
      />
      <circle
        cx={endCoord.x}
        cy={endCoord.y}
        r={strokeWidth}
        fill="green"
        onMouseDown={(e) => {
          // Prevent the event from triggering the svg's onMouseDown
          e.stopPropagation();
          handleMouseDown();
        }}
      />
    </svg>
  );
};

export default function App() {
  return (
    <div style={{ marginTop: '50px', marginLeft: '50px' }}>
      <CircularSlider radius={100} strokeWidth={20} />
    </div>
  );
}
