import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { SIGNUP } from "../../constants/auth";
import { auth_request } from "../../apis/auth";
import Button from "../../components/atoms/Button/Button";
import { isEmail, isMoreThan8Length, doMatch } from "../../utils/validCheck";

const InputContainer = styled.div`
  background-color: antiquewhite;
  border-radius: 5px;
  width: 70%;
  padding: 10px;
  margin: 10px;
`;

const SignUp: React.FC<{
  addToken: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ addToken }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const [enteredPw, setEnteredPw] = useState("");
  const [pwInputTouched, setPwInputTouched] = useState(false);

  const [enteredPwCheck, setEnteredPwCheck] = useState("");
  const [checkPwInputTouched, setCheckInputTouched] = useState(false);

  const enteredEmailIsValid = isEmail(enteredEmail);
  const enteredPwIsValid = isMoreThan8Length(enteredPw);
  const enteredPwCheckIsValid =
    doMatch(enteredPw, enteredPwCheck) && enteredPwIsValid;
  const isFormValid =
    enteredEmailIsValid && enteredPwIsValid && enteredPwCheckIsValid;

  const navigate = useNavigate();

  let enteredEmailFeedback;

  if (!emailInputTouched) {
    enteredEmailFeedback = "";
  }
  if (emailInputTouched && !enteredEmailIsValid) {
    enteredEmailFeedback = SIGNUP.EMAIL_VALID_FAIL;
  }
  if (emailInputTouched && enteredEmailIsValid) {
    enteredEmailFeedback = SIGNUP.EMAIL_VALID_SUCCESS;
  }

  let enteredPwFeedback;

  if (!pwInputTouched) {
    enteredPwFeedback = "";
  }
  if (pwInputTouched && !enteredPwIsValid) {
    enteredPwFeedback = SIGNUP.PW_VALID_FAIL;
  }
  if (pwInputTouched && enteredPwIsValid) {
    enteredPwFeedback = SIGNUP.PW_VALID_SUCCESS;
  }

  let enteredPwCheckFeedback;

  if (!checkPwInputTouched) {
    enteredPwCheckFeedback = "";
  }
  if (checkPwInputTouched && !enteredPwCheckIsValid) {
    enteredPwCheckFeedback = SIGNUP.PW_MATCH_FAIL;
  }
  if (checkPwInputTouched && enteredPwCheckIsValid) {
    enteredPwCheckFeedback = SIGNUP.PW_MATCH_SUCCESS;
  }

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  const pwChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPw(event.target.value);
  };

  const checkPwChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPwCheck(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailInputTouched(true);
  };

  const pwBlurHandler = () => {
    setPwInputTouched(true);
  };

  const pwCheckBlurHandler = () => {
    setCheckInputTouched(true);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    // if (allValid) {
    //   const userInfo = { email: enteredEmail, password: enteredPwCheck };
    //   const response = await auth_request("signup", userInfo);
    //   alert(response.message);
    //   localStorage.setItem("token", response.token);
    //   addToken(response.token);
    //   navigate("/main");
    //   return;
    // }
    // return alert("아이디와 비밀번호를 다시 확인해주세요");
  };

  return (
    <form onSubmit={submitHandler}>
      <InputContainer>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          placeholder={SIGNUP.EMAIL}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <p>{enteredEmailFeedback}</p>
      </InputContainer>

      <InputContainer>
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          placeholder={SIGNUP.PW}
          onChange={pwChangeHandler}
          onBlur={pwBlurHandler}
        />
        <p>{enteredPwFeedback}</p>
      </InputContainer>

      <InputContainer>
        <label htmlFor="match-pw">password check</label>
        <input
          id="match-pw"
          type="password"
          placeholder={SIGNUP.PW}
          onChange={checkPwChangeHandler}
          onBlur={pwCheckBlurHandler}
        />
        <div>{enteredPwCheckFeedback}</div>
      </InputContainer>

      <Button disabled={!isFormValid}>가입하기</Button>
    </form>
  );
};

export default SignUp;
