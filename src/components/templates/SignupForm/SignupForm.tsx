import React, { useState, useEffect } from "react";
import { SIGNUP } from "../../../constants/path";
import Button from "../../atoms/Button/Button";

const SignupForm = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [inputMatchPW, setInputMatchPW] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPW, setValidPW] = useState(false);
  const [matchPW, setMatchPW] = useState(false);
  const [allValid, setAllValid] = useState(false);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const pwChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPW(event.target.value);
  };

  const matchPwChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMatchPW(event.target.value);
  };

  const validateEmailHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (isEmail(input)) {
      return setValidEmail(true);
    }
    return setValidEmail(false);
  };

  const validatePwHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (isMoreThan8Length(input)) {
      return setValidPW(true);
    }
    return setValidPW(false);
  };

  const validateMatchPwHandler = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    const input = event.target.value;
    if (doPasswordMatch(inputPW, input)) {
      return setMatchPW(true);
    }
    return setMatchPW(false);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (allValid) {
      const profile = { email: inputEmail, password: inputMatchPW };
      return console.log(profile);
    }
    return console.log("올바르지않습니다");
  };

  const isEmail = (email: string) => {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (regex.test(email)) {
      return true;
    }
    return false;
  };

  const isMoreThan8Length = (pw: string) => {
    if (pw.length >= 8) {
      return true;
    }
    return false;
  };

  const doPasswordMatch = (pw: string, checkPw: string) => {
    if (pw === checkPw) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (validEmail && validPW && matchPW) {
      return setAllValid(true);
    }
    return setAllValid(false);
  }, [validEmail, validPW, matchPW]);

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          placeholder={SIGNUP.EMAIL}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <div>
          {validEmail ? SIGNUP.EMAIL_VALID_SUCCESS : SIGNUP.EMAIL_VALID_FAIL}
        </div>

        <label htmlFor="pw">password</label>
        <input
          id="pw"
          type="password"
          placeholder={SIGNUP.PW}
          onChange={pwChangeHandler}
          onBlur={validatePwHandler}
        />
        <div>{validPW ? SIGNUP.PW_VALID_SUCCESS : SIGNUP.PW_VALID_FAIL}</div>

        <label htmlFor="match-pw">password check</label>
        <input
          id="match-pw"
          type="password"
          placeholder={SIGNUP.PW}
          onChange={matchPwChangeHandler}
          onBlur={validateMatchPwHandler}
        />
        <div>{matchPW ? SIGNUP.PW_MATCH_SUCCESS : SIGNUP.PW_MATCH_FAIL}</div>
        <Button disabled={!allValid}>가입하기</Button>
      </form>
    </>
  );
};

export default SignupForm;
