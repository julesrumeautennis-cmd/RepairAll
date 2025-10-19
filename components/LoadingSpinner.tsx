import React from 'react';

// Defines the props that the LoadingSpinner component accepts.
interface LoadingSpinnerProps {
    // The message to display below the spinner (e.g., "Generating image...").
    message: string;
}

/**
 * A component that displays an animated spinner and a loading message.
 * It's shown while the AI is generating the repair guide.
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center text-slate-200">
      {/* The animated spinning circle element */}
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-400"></div>
      {/* The main title shown during loading */}
      <h2 className="mt-6 text-xl font-semibold text-white">Generating Your Repair Guide</h2>
      {/* The dynamic message that updates based on the current generation step */}
      <p className="mt-2 text-slate-300">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
