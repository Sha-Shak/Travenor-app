import React from 'react';
type InputProps = {
  type: string;
  placeholder: string;
  value?: string;
  onChangeAction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

const CustomInput: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChangeAction,
  className,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChangeAction}
      value={value}
      className={className}
    />
  );
};

export default CustomInput;
