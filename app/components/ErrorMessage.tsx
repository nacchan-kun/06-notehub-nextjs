import css from '../css/ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <>
      <p className={css.text}>{message}</p>
    </>
  );
}