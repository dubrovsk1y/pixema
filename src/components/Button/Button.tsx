import React, { FC } from "react";
import "./Button.css";

type ButtonProps = {
  className: any;
  text: string;
};

const Button: FC<ButtonProps> = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
