export type CustomInputHookProps = {
  dafaultValue: string;
  maxLength?: number;
  minLength?: number;
  type?: 'username' | 'password' | 'email' | 'name';
};
