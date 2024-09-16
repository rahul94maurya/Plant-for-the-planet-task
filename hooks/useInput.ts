import { getPasswordError, getUserNameError } from '@/lib/utils';
import { useState } from 'react';

type CustomInputHookProps = {
  dafaultValue: string;
  maxLength: number;
  minLength: number;
  type?: 'username' | 'password';
};

export const useInput = ({
  dafaultValue,
  maxLength,
  minLength,
  type,
}: CustomInputHookProps) => {
  const [inputValue, setInputValue] = useState(dafaultValue);
  const [didEdit, setDidEdit] = useState(false);

  let error;
  if (type === 'username') {
    error = getUserNameError({ inputValue, didEdit, maxLength, minLength });
  }
  if (type === 'password') {
    error = getPasswordError({ inputValue, didEdit, maxLength, minLength });
  }
  //   const error = getError({ inputValue, didEdit, maxLength, minLength });

  const onChangeHandler = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setDidEdit(false);
  };
  const onBlurHandler = function () {
    setDidEdit(true);
  };

  return { inputValue, onBlurHandler, onChangeHandler, didEdit, error };
};
