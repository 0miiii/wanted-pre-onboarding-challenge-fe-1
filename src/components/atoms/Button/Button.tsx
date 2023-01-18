import React from "react";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <button type="submit" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
