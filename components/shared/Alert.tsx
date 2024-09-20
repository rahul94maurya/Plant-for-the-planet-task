import { AlertProps } from '@/types/components.types';
import React, { useEffect } from 'react';

const Alert = ({ severity = null, message, onClose, isOpen }: AlertProps) => {
  const handleClose = () => {
    onClose();
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    isOpen && (
      <div
        className={`flex items-center justify-between p-4 mb-4 text-sm font-medium rounded-lg ${
          severity === 'error'
            ? 'bg-red-100 text-red-800'
            : severity === 'warning'
            ? 'bg-yellow-100 text-yellow-800'
            : severity === 'success'
            ? 'bg-green-100 text-green-800'
            : 'bg-blue-100 text-blue-800'
        }`}
      >
        <div className="flex items-center">
          <span className="ml-2">{message}</span>
        </div>
        <button
          type="button"
          className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleClose}
        >
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
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    )
  );
};

export default Alert;
