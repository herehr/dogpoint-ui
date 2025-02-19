"use client";

export function Select({ onChange, children }) {
  return (
    <select
      onChange={onChange}
      className="border rounded p-2 w-full text-gray-700"
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
