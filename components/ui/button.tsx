"use client";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
