import React from "react";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, disabled }) => {
  return <button disabled={disabled}>{children}</button>;
};

export default Button;
