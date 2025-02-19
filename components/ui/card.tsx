"use client";

export function Card({ children, className }) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
