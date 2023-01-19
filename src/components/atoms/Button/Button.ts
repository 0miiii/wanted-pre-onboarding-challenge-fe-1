// import React from "react";
import styled from "styled-components";

// interface Props {
//   children: React.ReactNode;
//   disabled?: boolean;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// }

// const Button: React.FC<Props> = ({ children, disabled, onClick }) => {
//   return (
//     <button type="submit" disabled={disabled} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

const Button = styled.button`
  background-color: palevioletred;
  color: #fff;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
