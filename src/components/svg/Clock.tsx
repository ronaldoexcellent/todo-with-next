"use client";

import { useState, useEffect } from 'react';

export default function Clock() {
  const [greetings, setGreetings] = useState<string>("");

  useEffect(() => {
    // Function to update the clock hands based on the current time
    const updateClock = () => {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      let greetingText = '';
      if (hours < 12) {
        greetingText = 'Good Morning';
      } else if (hours < 18) {
        greetingText = 'Good Afternoon';
      } else {
        greetingText = 'Good Evening';
      }
      setGreetings(greetingText);

      // Calculate angles:
      // Second hand: 6° per second
      // Minute hand: 6° per minute with extra 0.1° per second
      // Hour hand: 30° per hour with 0.5° added per minute
      const secondAngle = seconds * 6;
      const minuteAngle = minutes * 6 + seconds * 0.1;
      const hourAngle = ((hours % 12) * 30) + (minutes * 0.5);

      // Update the transform attributes of each hand
      const secondHand = document.getElementById('second-hand');
      const minuteHand = document.getElementById('minute-hand');
      const hourHand = document.getElementById('hour-hand');

      if (secondHand)
        secondHand.setAttribute('transform', `rotate(${secondAngle} 64 60)`);
      if (minuteHand)
        minuteHand.setAttribute('transform', `rotate(${minuteAngle} 64 60)`);
      if (hourHand)
        hourHand.setAttribute('transform', `rotate(${hourAngle} 64 60)`);
    };
    
    // Initialize the clock and update every second
    updateClock();
      const timerId = setInterval(updateClock, 1000);
      return () => clearInterval(timerId);
    }, []);

  return (
    <div className='flex justify-between'>
      <svg
        id="clock"
        width="128"
        height="128"
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Clock face */}
        <g filter="url(#filter0_d_1_609)">
          <circle cx="64" cy="60" r="60" fill="#F1FDFE" />
        </g>
        {/* Hour Hand */}
        <rect
          id="hour-hand"
          x="64"
          y="60"
          width="43"
          height="1.45"
          rx="0.725"
          fill="#2E8F95"
          transform="rotate(0 64 60)"
        />
        {/* Minute Hand */}
        <rect
          id="minute-hand"
          x="64"
          y="60"
          width="43"
          height="1.3"
          rx="0.65"
          fill="#7DC9CE"
          transform="rotate(0 64 60)"
        />
        {/* Second Hand */}
        <rect
          id="second-hand"
          x="64"
          y="60"
          width="43"
          height="1.3"
          rx="0.65"
          fill="#C8C8C8"
          transform="rotate(0 64 60)"
        />
        {/* Clock center */}
        <g filter="url(#filter1_d_1_609)">
          <circle cx="64" cy="60" r="5" fill="#F0F4F3" />
        </g>

        {/* Decorative paths */}
        <path
          d="M61.36 10V8.71H63.77V16H62.33V10H61.36ZM65.593 14.42C66.233 13.8867 66.743 13.4433 67.123 13.09C67.503 12.73 67.8197 12.3567 68.073 11.97C68.3264 11.5833 68.453 11.2033 68.453 10.83C68.453 10.49 68.373 10.2233 68.213 10.03C68.053 9.83667 67.8064 9.74 67.473 9.74C67.1397 9.74 66.883 9.85333 66.703 10.08C66.523 10.3 66.4297 10.6033 66.423 10.99H65.063C65.0897 10.19 65.3264 9.58333 65.773 9.17C66.2264 8.75667 66.7997 8.55 67.493 8.55C68.253 8.55 68.8364 8.75333 69.243 9.16C69.6497 9.56 69.853 10.09 69.853 10.75C69.853 11.27 69.713 11.7667 69.433 12.24C69.153 12.7133 68.833 13.1267 68.473 13.48C68.113 13.8267 67.643 14.2467 67.063 14.74H70.013V15.9H65.073V14.86L65.593 14.42Z"
          fill="#2E8F95"
        />
        <path
          d="M67.31 105.53C67.2433 105.25 67.1267 105.04 66.96 104.9C66.8 104.76 66.5667 104.69 66.26 104.69C65.8 104.69 65.46 104.877 65.24 105.25C65.0267 105.617 64.9167 106.217 64.91 107.05C65.07 106.783 65.3033 106.577 65.61 106.43C65.9167 106.277 66.25 106.2 66.61 106.2C67.0433 106.2 67.4267 106.293 67.76 106.48C68.0933 106.667 68.3533 106.94 68.54 107.3C68.7267 107.653 68.82 108.08 68.82 108.58C68.82 109.053 68.7233 109.477 68.53 109.85C68.3433 110.217 68.0667 110.503 67.7 110.71C67.3333 110.917 66.8967 111.02 66.39 111.02C65.6967 111.02 65.15 110.867 64.75 110.56C64.3567 110.253 64.08 109.827 63.92 109.28C63.7667 108.727 63.69 108.047 63.69 107.24C63.69 106.02 63.9 105.1 64.32 104.48C64.74 103.853 65.4033 103.54 66.31 103.54C67.01 103.54 67.5533 103.73 67.94 104.11C68.3267 104.49 68.55 104.963 68.61 105.53H67.31ZM66.29 107.35C65.9367 107.35 65.64 107.453 65.4 107.66C65.16 107.867 65.04 108.167 65.04 108.56C65.04 108.953 65.15 109.263 65.37 109.49C65.5967 109.717 65.9133 109.83 66.32 109.83C66.68 109.83 66.9633 109.72 67.17 109.5C67.3833 109.28 67.49 108.983 67.49 108.61C67.49 108.223 67.3867 107.917 67.18 107.69C66.98 107.463 66.6833 107.35 66.29 107.35Z"
          fill="#2E8F95"
        />
        <path
          d="M114.55 58.63C114.583 57.9633 114.817 57.45 115.25 57.09C115.69 56.7233 116.267 56.54 116.98 56.54C117.467 56.54 117.883 56.6267 118.23 56.8C118.577 56.9667 118.837 57.1967 119.01 57.49C119.19 57.7767 119.28 58.1033 119.28 58.47C119.28 58.89 119.17 59.2467 118.95 59.54C118.737 59.8267 118.48 60.02 118.18 60.12V60.16C118.567 60.28 118.867 60.4933 119.08 60.8C119.3 61.1067 119.41 61.5 119.41 61.98C119.41 62.38 119.317 62.7367 119.13 63.05C118.95 63.3633 118.68 63.61 118.32 63.79C117.967 63.9633 117.54 64.05 117.04 64.05C116.287 64.05 115.673 63.86 115.2 63.48C114.727 63.1 114.477 62.54 114.45 61.8H115.81C115.823 62.1267 115.933 62.39 116.14 62.59C116.353 62.7833 116.643 62.88 117.01 62.88C117.35 62.88 117.61 62.7867 117.79 62.6C117.977 62.4067 118.07 62.16 118.07 61.86C118.07 61.46 117.943 61.1733 117.69 61C117.437 60.8267 117.043 60.74 116.51 60.74H116.22V59.59H116.51C117.457 59.59 117.93 59.2733 117.93 58.64C117.93 58.3533 117.843 58.13 117.67 57.97C117.503 57.81 117.26 57.73 116.94 57.73C116.627 57.73 116.383 57.8167 116.21 57.99C116.043 58.1567 115.947 58.37 115.92 58.63H114.55Z"
          fill="#2E8F95"
        />
        <path
          d="M12.15 61.95C12.2033 62.2433 12.3233 62.47 12.51 62.63C12.7033 62.7833 12.96 62.86 13.28 62.86C13.6933 62.86 13.9933 62.69 14.18 62.35C14.3667 62.0033 14.46 61.4233 14.46 60.61C14.3067 60.8233 14.09 60.99 13.81 61.11C13.5367 61.23 13.24 61.29 12.92 61.29C12.4933 61.29 12.1067 61.2033 11.76 61.03C11.42 60.85 11.15 60.5867 10.95 60.24C10.75 59.8867 10.65 59.46 10.65 58.96C10.65 58.22 10.87 57.6333 11.31 57.2C11.75 56.76 12.35 56.54 13.11 56.54C14.0567 56.54 14.7233 56.8433 15.11 57.45C15.5033 58.0567 15.7 58.97 15.7 60.19C15.7 61.0567 15.6233 61.7667 15.47 62.32C15.3233 62.8733 15.0667 63.2933 14.7 63.58C14.34 63.8667 13.8467 64.01 13.22 64.01C12.7267 64.01 12.3067 63.9167 11.96 63.73C11.6133 63.5367 11.3467 63.2867 11.16 62.98C10.98 62.6667 10.8767 62.3233 10.85 61.95H12.15ZM13.21 60.15C13.5567 60.15 13.83 60.0433 14.03 59.83C14.23 59.6167 14.33 59.33 14.33 58.97C14.33 58.5767 14.2233 58.2733 14.01 58.06C13.8033 57.84 13.52 57.73 13.16 57.73C12.8 57.73 12.5133 57.8433 12.3 58.07C12.0933 58.29 11.99 58.5833 11.99 58.95C11.99 59.3033 12.09 59.5933 12.29 59.82C12.4967 60.04 12.8033 60.15 13.21 60.15Z"
          fill="#2E8F95"
        />
        <defs>
          <filter
            id="filter0_d_1_609"
            x="0"
            y="0"
            width="128"
            height="128"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_609"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_609"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_1_609"
            x="55"
            y="55"
            width="18"
            height="18"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_609"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_609"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className='font-bold absolute right-0 text-sm'> {greetings}</div>
    </div>
  );
}