import { getError } from '@/lib/utils';
import { useState } from 'react';

type CustomInputHookProps = {
  dafaultValue: string;
  maxLength: number;
  minLength: number;
};

export const useInput = ({
  dafaultValue,
  maxLength,
  minLength,
}: CustomInputHookProps) => {
  const [inputValue, setInputValue] = useState(dafaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const error = getError({ inputValue, didEdit, maxLength, minLength });

  const onChangeHandler = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setDidEdit(false);
  };
  const onBlurHandler = function () {
    setDidEdit(true);
  };

  return { inputValue, onBlurHandler, onChangeHandler, didEdit, error };
};
