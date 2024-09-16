import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
  const router = useRouter();
  const handleLogout = function () {
    localStorage.removeItem('authStatus');
    router.replace('/login');
  };
  return (
    <header className="bg-white shadow">
      <div className="flex items-center px-4">
        <div className="flex-shrink-0">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            className="h-8 w-8"
          />
        </div>
        <div className="flex items-center justify-between w-full px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/edit-profile"
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            Profile
          </Link>
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
    </header>
  );
};

export default Header;
