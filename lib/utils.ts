type ErrorProps = {
  inputValue: string;
  didEdit: boolean;
  maxLength: number;
  minLength: number;
};

export const getError = function ({
  inputValue,
  didEdit,
  maxLength,
  minLength,
}: ErrorProps) {
  let errorMessage = didEdit && inputValue.length === 0 ? "can't be empty" : '';
  if (didEdit && inputValue.length !== 0 && inputValue.length < minLength) {
    errorMessage = `Username must be at least ${minLength} characters long`;
  }
  if (inputValue.length > maxLength) {
    errorMessage = `cannot be greater than ${maxLength}`;
  }
  if (inputValue.length && !/^[a-zA-Z0-9]+$/.test(inputValue)) {
    errorMessage = `Username must contain only letters and numbers`;
  }
  console.log('test', !/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(inputValue));
  if (
    didEdit &&
    inputValue.length !== 0 &&
    !/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(inputValue)
  ) {
    errorMessage = `Username must contain one alphabetic letter`;
  }
  return errorMessage;
};
