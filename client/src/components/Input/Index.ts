import React from 'react'
type InputProps= {
    inputType:? string;
    palceholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input : React.FC<InputProps> = ({inputType, palceholder, value, onChange}: InputProps) => {
  return (
    <h1> Hello </h1>
    );
}

export default Input