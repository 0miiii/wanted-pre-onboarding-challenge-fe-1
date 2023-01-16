import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { SIGNUP } from "../../constants/auth";
import { auth_request } from "../../apis/auth";
import Button from "../../components/atoms/Button/Button";

const SignUp: React.FC<{
  addToken: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ addToken }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [inputMatchPW, setInputMatchPW] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPW, setValidPW] = useState(false);
  const [matchPW, setMatchPW] = useState(false);
  const [allValid, setAllValid] = useState(false);
  const navigate = useNavigate();

  const isEmail = (email: string) => {
    const emailRegExp = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
    const regex = new RegExp(emailRegExp);

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
    if (validPW && pw === checkPw) {
      return true;
    }
    return false;
  };

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

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (allValid) {
      const userInfo = { email: inputEmail, password: inputMatchPW };
      const response = await auth_request("signup", userInfo);
      alert(response.message);
      localStorage.setItem("token", response.token);
      addToken(response.token);
      navigate("/main");
      return;
    }
    return alert("아이디와 비밀번호를 다시 확인해주세요");
  };

  useEffect(() => {
    if (validEmail && validPW && matchPW) {
      return setAllValid(true);
    }
    return setAllValid(false);
  }, [validEmail, validPW, matchPW]);

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">
        email
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
      </label>

      <label htmlFor="password">
        password
        <input
          id="password"
          type="password"
          placeholder={SIGNUP.PW}
          onChange={pwChangeHandler}
          onBlur={validatePwHandler}
        />
        <div>{validPW ? SIGNUP.PW_VALID_SUCCESS : SIGNUP.PW_VALID_FAIL}</div>
      </label>

      <label htmlFor="match-pw">
        password check
        <input
          id="match-pw"
          type="password"
          placeholder={SIGNUP.PW}
          onChange={matchPwChangeHandler}
          onBlur={validateMatchPwHandler}
        />
        <div>{matchPW ? SIGNUP.PW_MATCH_SUCCESS : SIGNUP.PW_MATCH_FAIL}</div>
      </label>

      <Button disabled={!allValid}>가입하기</Button>
    </form>
  );
};

export default SignUp;
