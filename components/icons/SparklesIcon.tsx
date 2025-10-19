import React from 'react';

/**
 * A decorative sparkles icon, often used to indicate an AI-powered or "magic" action.
 */
const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.93 13.5A2.25 2.25 0 0 0 12 15.75l.07.07A2.25 2.25 0 0 0 14.25 18l.07.07A2.25 2.25 0 0 0 16.5 20.25l.07.07A2.25 2.25 0 0 0 18.75 22.5l.07.07c.98.98 2.56.98 3.54 0l.07-.07a2.5 2.5 0 0 0 0-3.54l-5.66-5.66a2.5 2.5 0 0 0-3.54 0l-.07.07c-.98.98-.98 2.56 0 3.54l.07.07Z" />
    <path d="M12 22.5 3.5 14" />
    <path d="M10.12 12 2.25 4.12A2.5 2.5 0 0 1 5.79 7.66l3.54 3.54" />
    <path d="m2.25 21.75 1.41-1.41" />
    <path d="m14 8.5 1.41-1.41" />
    <path d="M12 12.01V12" />
    <path d="M3.5 3.5 4 4" />
    <path d="M18 12.01V12" />
  </svg>
);

export default SparklesIcon;
