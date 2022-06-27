import React, { FC } from "react";
import "./Input.css";

type InputProps = {
  placeholder: string;
  id?: string;
  className?: string;
};

const Input: FC<InputProps> = ({ placeholder, id, className }) => {
  return <input id={id} className={className} placeholder={placeholder} type="text" />;
};

export default Input;
