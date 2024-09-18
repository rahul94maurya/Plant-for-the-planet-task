import { removeUserFromLocalStorage } from '@/lib/utility/localStorage';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ConfirmationModal from './shared/ConfirmationModal';
import Image from 'next/image';
import logo from '@/public/logo.svg';

const Header = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = function (canDelete: boolean) {
    if (canDelete) {
      removeUserFromLocalStorage();
      router.replace('/login');
    } else {
      setShowModal(false);
    }
  };

  const handleLogout = function () {
    setShowModal(true);
  };
  return (
    <header className="bg-white shadow">
      <div className="flex items-center px-4">
        <Link href="/">
          <div className="flex-shrink-0">
            <Image
              alt="Logo"
              src={logo}
              width={36}
              height={36}
              className="h-10 w-10"
            />
          </div>
        </Link>
        <div className="flex items-center justify-between w-full px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-center">
            {/* <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Home
            </Link> */}
            <Link
              href="/edit-profile"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              Profile
            </Link>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleLogout}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <ConfirmationModal isOpen={showModal} onClose={handleModalClose} />
    </header>
  );
};

export default Header;
