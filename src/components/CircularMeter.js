import React from "react";

export const CircularMeter = ({ value }) => {
  const radius = 75;
  const stroke = 7;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      {/* Background Circle */}
      <circle
        stroke="#151515"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Progress Circle */}
      <circle
        stroke="url(#gradient)"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{
          strokeDashoffset,
          transition: "stroke-dashoffset 0.5s ease",
        }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Gradient */}
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#aa367c" />
          <stop offset="100%" stopColor="#4a2fbd" />
        </linearGradient>
      </defs>

      {/* Percentage Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontSize="20"
        fontWeight="bold"
      >
        {value}%
      </text>
    </svg>
  );
};