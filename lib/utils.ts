type UserNameErrorProps = {
  inputValue: string;
  didEdit: boolean;
  maxLength?: number;
  minLength?: number;
};

export const getUserNameError = function ({
  inputValue,
  didEdit,
  maxLength = 20,
  minLength = 6,
}: UserNameErrorProps) {
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
  if (
    didEdit &&
    inputValue.length !== 0 &&
    !/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(inputValue)
  ) {
    errorMessage = `Username must contain one alphabetic letter`;
  }
  return errorMessage;
};

export const getPasswordError = function ({
  inputValue,
  didEdit,
  maxLength = 20,
  minLength = 8,
}: UserNameErrorProps) {
  let errorMessage = didEdit && inputValue.length === 0 ? "can't be empty" : '';
  if (didEdit && inputValue.length !== 0 && inputValue.length < minLength) {
    errorMessage = `Password must be at least ${minLength} characters long`;
  }
  if (inputValue.length > maxLength) {
    errorMessage = `cannot be greater than ${maxLength}`;
  }
  if (
    didEdit &&
    inputValue.length !== 0 &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
      inputValue
    )
  ) {
    errorMessage = `Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character`;
  }

  return errorMessage;
};

export const getEmailError = function ({
  inputValue,
  didEdit,
}: UserNameErrorProps) {
  let errorMessage = didEdit && inputValue.length === 0 ? "can't be empty" : '';

  if (
    didEdit &&
    inputValue.length !== 0 &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)
  ) {
    errorMessage = `Please enter valid email address`;
  }

  return errorMessage;
};

export const getNameError = function ({
  inputValue,
  didEdit,
  maxLength = 20,
}: UserNameErrorProps) {
  let errorMessage = didEdit && inputValue.length === 0 ? "can't be empty" : '';
  // if (didEdit && inputValue.length !== 0 && inputValue.length < minLength) {
  //   errorMessage = `Password must be at least ${minLength} characters long`;
  // }
  if (inputValue.length > maxLength) {
    errorMessage = `cannot be greater than ${maxLength}`;
  }
  if (didEdit && inputValue.length !== 0 && !/^[A-Za-z\s]+$/.test(inputValue)) {
    errorMessage = `Name must contain only letters and spaces`;
  }

  return errorMessage;
};
