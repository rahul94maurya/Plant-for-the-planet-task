import React, { useState, useEffect } from 'react';

const AlertModal = function ({ isOpen }: { isOpen: boolean }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <dialog
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 ${
        show ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Alert</h2>
        <p className="text-gray-700">
          This is an alert message that will close automatically after 5
          seconds.
        </p>
      </div>
    </dialog>
  );
};

export default AlertModal;
