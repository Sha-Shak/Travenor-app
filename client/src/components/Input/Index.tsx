import React from 'react';
type InputProps = {
  inputType: string;
  placeholder: string;
  value?: string;
  onChangeAction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

const CustomInput: React.FC<InputProps> = ({
  inputType,
  placeholder,
  value,
  onChangeAction,
  className,
}: InputProps) => {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      onChange={onChangeAction}
      value={value}
      className={className}
    />
  );
};

export default CustomInput;
