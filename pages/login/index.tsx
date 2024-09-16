import Link from 'next/link';
import React, { use, useState } from 'react';
import { authenticateUser } from '../utils/api';

const LoginPage = () => {
  const [userName, setUserName] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [isLoading, setIsLoading] = useState(false);

  const handleUserNameChange = function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setUserName(event.target.value);
  };

  const handlePasswordChange = function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async function (
    event: React.FormEvent<HTMLFormElement>
  ) {
    const requestBody = { username: 'emilys', password: 'emilyspass' };
    event.preventDefault();
    setIsLoading(true);
    const response = await authenticateUser(requestBody);
    setIsLoading(false);
    console.log('response data from API', response);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                value={userName}
                onChange={handleUserNameChange}
                type="text"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={handlePasswordChange}
                type="password"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? 'Loading...' : 'Sign in'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {/* Not a member?{" "} */}
          {`Don't have an account?`}{' '}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline"
          >
            Signup Now.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
