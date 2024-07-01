import React from 'react';
type InputProps = {
  inputType: string;
  placeholder: string;
  value?: string;
  onChangeAction: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: React.FC<InputProps> = ({
  inputType,
  placeholder,
  value,
  onChangeAction,
}: InputProps) => {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      onChange={onChangeAction}
      value={value}
    />
  );
};

export default CustomInput;
