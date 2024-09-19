import { genders } from '@/lib/data/constants';
import { authenticateUser } from '@/services/api';
import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/router';
import { useInput } from '@/hooks/useInput';
import Input from '@/components/shared/Input';
import {
  setDummyUserIntoLocalStorage,
  setUserIntoLocalStorage,
} from '@/lib/utility/localStorage';
import Image from 'next/image';
import logo from '@/public/logo.svg';

const SignupPage = () => {
  const router = useRouter();

  const {
    inputValue: userName,
    onBlurHandler: handleUserNameBlur,
    onChangeHandler: handleUserNameChange,
    error: userNameErrorMessage,
    setError: setUserNameErrorMessage,
  } = useInput({
    dafaultValue: '',
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
  const {
    inputValue: email,
    onBlurHandler: handleEmailBlur,
    onChangeHandler: handleEmailChange,
    error: emailErrorMessage,
    setError: setEmailErrorMessage,
  } = useInput({
    dafaultValue: '',
    type: 'email',
  });
  const {
    inputValue: name,
    onBlurHandler: handleNameBlur,
    onChangeHandler: handleNameChange,
    error: nameErrorMessage,
    setError: setNameErrorMessage,
  } = useInput({
    dafaultValue: '',
    type: 'name',
  });

  const [dateOfBirth, setDateOfBirth] = useState<Date | null>();
  const [dateOfBirthErrorMessage, setDateOfBirthErrorMessage] = useState('');

  const [gender, setGender] = useState('');
  const [genderErrorMessage, setGenderErrorMessage] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      setGenderErrorMessage('');
    } else {
      setGenderErrorMessage('Please select a gender');
    }
    setGender(selectedValue);
  };

  const handleGenderBlur = function () {
    if (gender.length === 0) {
      setGenderErrorMessage('Please select a gender');
    }
  };
  const handleDateOfBirthChange = function (date: Date | null) {
    if (date) {
      setDateOfBirthErrorMessage('');
    }
    setDateOfBirth(date);
  };
  const handleDateOfBirthBlur = function () {
    if (!dateOfBirth) {
      setDateOfBirthErrorMessage('Please select a date of birth');
    }
  };

  const canSubmitForm = function () {
    if (!email) {
      setEmailErrorMessage("can't be empty");
    } else if (!userName) {
      setUserNameErrorMessage("can't be empty");
    } else if (!password) {
      setPasswordErrorMessage("can't be empty");
    } else if (!name) {
      setNameErrorMessage("can't be empty");
    } else if (!dateOfBirth) {
      setDateOfBirthErrorMessage('Please select a date of birth');
    } else if (!gender) {
      setGenderErrorMessage('Please select a gender');
    }
    const result =
      email && userName && password && name && dateOfBirth && gender;
    return result;
  };

  const handleFormSubmit = async function (
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    // TODO: Add form submission logic here

    if (canSubmitForm()) {
      const requestBody = {
        email,
        userName,
        name,
        description,
        gender,
        password,
        dateOfBirth: new Date(dateOfBirth as Date)?.toISOString(),
      };
      setIsLoading(true);
      const response = await authenticateUser(requestBody);
      if (response.token) {
        setUserIntoLocalStorage(JSON.stringify(response));
        setDummyUserIntoLocalStorage(JSON.stringify(requestBody)); //
        router.push('/');
      }
      setIsLoading(false);
      console.log('Form submitted:', requestBody);
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
          Sign up for an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <Input
            id="email"
            type="email"
            label="Email Address*"
            value={email}
            error={emailErrorMessage}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
          <Input
            id="userName"
            type="text"
            label="Username*"
            placeholder="emilys"
            value={userName}
            error={userNameErrorMessage}
            onChange={handleUserNameChange}
            onBlur={handleUserNameBlur}
          />
          <Input
            id="password"
            type="password"
            label="Password*"
            placeholder="emilyspass"
            value={password}
            error={passwordErrorMessage}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
          <Input
            id="name"
            type="text"
            label="Name*"
            placeholder="Rahul"
            value={name}
            error={nameErrorMessage}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date of Birth*
            </label>
            <div className="mt-2 customDatePickerWidth">
              <DatePicker
                name="startDate"
                id="startDate"
                selected={dateOfBirth}
                onChange={handleDateOfBirthChange}
                onBlur={handleDateOfBirthBlur}
                maxDate={new Date()}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                closeOnScroll={true}
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                className="block w-full  rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                dateFormat="dd/MM/yyyy"
              />
              {dateOfBirthErrorMessage && (
                <div className="text-red-700">{dateOfBirthErrorMessage}</div>
              )}
            </div>
          </div>
          <div className="w-full ">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900 "
            >
              Gender*
            </label>
            <div className="block w-full mt-2 ">
              <select
                value={gender}
                onChange={handleGenderChange}
                onBlur={handleGenderBlur}
                className="block w-full h-9 font-medium rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select your gender</option>
                {genders.map((gender) => (
                  <option key={gender.value} value={gender.value}>
                    {gender.label}
                  </option>
                ))}
              </select>
              {genderErrorMessage && (
                <div className="text-red-700">{genderErrorMessage}</div>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                rows={3}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? 'Loading...' : 'Sign up'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline"
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
