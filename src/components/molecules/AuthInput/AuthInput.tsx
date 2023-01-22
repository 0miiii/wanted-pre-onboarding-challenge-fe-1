import React, { forwardRef } from "react";
import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: antiquewhite;
  border-radius: 5px;
  width: 70%;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

type Ref = HTMLInputElement;

type Props = {
  enteredValue?: React.Dispatch<React.SetStateAction<string>>;
  inputTouched?: React.Dispatch<React.SetStateAction<boolean>>;
  inputFeedBack?: string | undefined;
  placeholder: string;
  label: string;
  type: "email" | "password" | "text";
  id: string;
};

const AuthInput = forwardRef<Ref, Props>(
  (
    { enteredValue, inputTouched, inputFeedBack, placeholder, label, type, id },
    ref
  ) => {
    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (enteredValue) {
        enteredValue(event.target.value);
      }
    };

    const inputBlurHandler = () => {
      if (inputTouched) {
        inputTouched(true);
      }
    };

    return (
      <InputContainer>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          ref={ref}
        />
        <p>{inputFeedBack}</p>
      </InputContainer>
    );
  }
);

export default AuthInput;
