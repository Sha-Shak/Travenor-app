import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  category: 'primary' | 'warning' | 'delete' | 'gray';
};
const Button = ({
  type,
  children,
  className,
  style,
  disabled = false,
  category,
}: ButtonProps) => {
  const baseClass = 'py-2 px-4 rounded font-bold text-white';
  let buttonClass = '';
  switch (category) {
    case 'primary':
      buttonClass = 'bg-primaryColor hover:bg-primaryColorDarkShade';
      break;
    case 'warning':
      buttonClass = 'bg-yellow-500 hover:bg-yellow-700';
      break;
    case 'delete':
      buttonClass = 'bg-red-500 hover:bg-red-700';
      break;
    case 'gray':
      buttonClass = 'bg-lightGrayColor';
      break;
    default:
      buttonClass = '';
  }
  return (
    <button
      className={`${className} ${baseClass} ${buttonClass}`}
      type={type}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
