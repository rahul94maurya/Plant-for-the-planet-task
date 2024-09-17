import {
  getPasswordError,
  getUserNameError,
  getEmailError,
  getNameError,
} from '@/lib/utility/validators';
import { useState, useEffect } from 'react';

type CustomInputHookProps = {
  dafaultValue: string;
  maxLength?: number;
  minLength?: number;
  type?: 'username' | 'password' | 'email' | 'name';
};

export const useInput = ({
  dafaultValue,
  maxLength,
  minLength,
  type,
}: CustomInputHookProps) => {
  const [inputValue, setInputValue] = useState(dafaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const [error, setError] = useState('');

  const onChangeHandler = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setDidEdit(false);
  };
  const onBlurHandler = function () {
    setDidEdit(true);
  };

  useEffect(() => {
    let error = '';
    if (type === 'username') {
      error = getUserNameError({ inputValue, didEdit, maxLength, minLength });
    }
    if (type === 'password') {
      error = getPasswordError({ inputValue, didEdit, maxLength, minLength });
    }
    if (type === 'email') {
      error = getEmailError({ inputValue, didEdit });
    }
    if (type === 'name') {
      error = getNameError({ inputValue, didEdit, maxLength });
    }
    setError(error);
  }, [inputValue, didEdit, maxLength, minLength, type]);

  return {
    inputValue,
    onBlurHandler,
    onChangeHandler,
    didEdit,
    error,
    setError,
  };
};
