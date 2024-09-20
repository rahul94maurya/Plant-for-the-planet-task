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

export interface AlertState {
  severity: 'error' | 'warning' | 'success' | null;
  message: string;
  isOpen: boolean;
}

export interface AlertProps extends AlertState {
  onClose: () => void;
}
