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
          {/* <svg
            className={`flex-shrink-0 h-6 w-6 ${
              severity === 'error'
                ? 'text-red-500'
                : severity === 'warning'
                ? 'text-yellow-500'
                : severity === 'success'
                ? 'text-green-500'
                : 'text-blue-500'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.97-7.07l-5.93 5.93c-0.35 0.35-0.35 0.88 0 1.23L12 17.78m8.29-8.29l-5.93-5.93c-0.35-0.35-0.35-0.88 0-1.23L16.97 4.07z"
            />
          </svg> */}
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
