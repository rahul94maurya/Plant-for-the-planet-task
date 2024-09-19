import { InputHTMLAttributes } from 'react';

export type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: (status: boolean) => void;
};

export type InputProps = {
  label: string;
  id: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;
