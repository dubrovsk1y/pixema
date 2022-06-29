import React, { FC } from "react";
import "./Button.css";

type ButtonProps = {
  className: any;
  text: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ className, text, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
