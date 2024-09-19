import Link from 'next/link';
import React, { useState } from 'react';
import { authenticateUser } from '@/services/api';
import { useRouter } from 'next/router';
import Input from '@/components/shared/Input';
import { useInput } from '@/hooks/useInput';
import { setUserIntoLocalStorage } from '@/lib/utility/localStorage';
import Image from 'next/image';
import logo from '@/public/logo.svg';

const LoginPage = () => {
  const router = useRouter();
  const {
    inputValue: userName,
    onBlurHandler: handleUserNameBlur,
    onChangeHandler: handleUserNameChange,
    error: userNameErrorMessage,
    setError: setUserNameErrorMessage,
  } = useInput({
    dafaultValue: 'emilys',
    maxLength: 10,
    minLength: 6,
    type: 'username',
  });

  const {
    inputValue: password,
    onBlurHandler: handlePasswordBlur,
    onChangeHandler: handlePasswordChange,
    error: passwordErrorMessage,
    setError: setPasswordErrorMessage,
  } = useInput({
    dafaultValue: 'emilyspass',
    maxLength: 20,
    minLength: 8,
    type: 'password',
  });

  const [isLoading, setIsLoading] = useState(false);

  const canSubmitForm = function () {
    if (!userName) {
      setUserNameErrorMessage('Username is required');
    } else if (!password) {
      setPasswordErrorMessage('Password is required');
    }
    return userName && password;
  };

  const handleFormSubmit = async function (
    event: React.FormEvent<HTMLFormElement>
  ) {
    const requestBody = { username: 'emilys', password: 'emilyspass' };
    event.preventDefault();
    if (canSubmitForm()) {
      setIsLoading(true);

      const response = await authenticateUser(requestBody);
      if (response.token) {
        setUserIntoLocalStorage(JSON.stringify(response));
        router.push('/');
      } else {
        console.log('response', response);
      }

      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="Logo"
          src={logo}
          width={36}
          height={36}
          className="mx-auto h-12 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <Input
            id="userName"
            type="text"
            label="Username"
            placeholder="emilys"
            value={userName}
            error={userNameErrorMessage}
            onChange={handleUserNameChange}
            onBlur={handleUserNameBlur}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="emilyspass"
            value={password}
            error={passwordErrorMessage}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? 'Loading...' : 'Login'}
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
