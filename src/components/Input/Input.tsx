import React, { FC } from "react";
import "./Input.css";

type InputProps = {
  placeholder: string;
  id?: string;
  className?: string;
  onChange?: (event: any) => void;
};

const Input: FC<InputProps> = ({ onChange, placeholder, id, className }) => {
  return <input onChange={onChange} id={id} className={className} placeholder={placeholder} type="text" />;
};

export default Input;
