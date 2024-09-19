import { ConfirmationModalProps } from '@/types/components.types';
import React from 'react';

const ConfirmationModal = function ({
  isOpen,
  onClose,
}: ConfirmationModalProps) {
  return (
    <dialog
      className={`fixed top-0 px-4 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-bold mb-8">
          Are you sure you want to logout !
        </h2>
        <div className="flex justify-end between  gap-6">
          <button
            type="button"
            onClick={() => onClose(false)}
            className="flex min-w-20   justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </button>
          <button
            onClick={() => onClose(true)}
            className="flex min-w-20  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logout
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default ConfirmationModal;
