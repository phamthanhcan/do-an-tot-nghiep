import React from "react";

const MoneyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      width="50px"
      height="50px"
    >
      <rect
        width="448"
        height="256"
        x="32"
        y="80"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="16"
        ry="16"
        transform="rotate(180 256 208)"
      ></rect>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M64 384h384M96 432h320"
      ></path>
      <circle
        cx="256"
        cy="208"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></circle>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80m368 176a80 80 0 00-80 80M32 256a80 80 0 0180 80"
      ></path>
    </svg>
  );
};

export default MoneyIcon;
