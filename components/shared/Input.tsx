import React, { InputHTMLAttributes } from 'react';

type InputProps = {
  label: string;
  id: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = function ({ label, id, error, className, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="mt-2">
        <input
          id={id}
          className={`${className} block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          {...props}
        />
      </div>
      {error && <div className="text-red-700">{error}</div>}
    </div>
  );
};

export default Input;
