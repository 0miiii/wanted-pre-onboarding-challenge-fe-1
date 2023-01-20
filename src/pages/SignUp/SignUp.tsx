import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import authApi from "../../apis/auth";
import { tokenSaveHandler } from "../../store/reducers/authSlice";
import { SIGNUP } from "../../constants/auth";
import { isEmail, isMoreThan8Length, doMatch } from "../../utils/validCheck";
import { FormContainer, InputContainer } from "./SignUp.style";
import Button from "../../components/atoms/Button/Button";
import { EnteredUserInfo } from "../../types/user";

const SignUp = () => {
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
  const dispatch = useDispatch();

  let enteredEmailFeedback;
  let enteredPwFeedback;
  let enteredPwCheckFeedback;

  if (!emailInputTouched) {
    enteredEmailFeedback = "";
  }
  if (emailInputTouched && !enteredEmailIsValid) {
    enteredEmailFeedback = SIGNUP.EMAIL_VALID_FAIL;
  }
  if (emailInputTouched && enteredEmailIsValid) {
    enteredEmailFeedback = SIGNUP.EMAIL_VALID_SUCCESS;
  }

  if (!pwInputTouched) {
    enteredPwFeedback = "";
  }
  if (pwInputTouched && !enteredPwIsValid) {
    enteredPwFeedback = SIGNUP.PW_VALID_FAIL;
  }
  if (pwInputTouched && enteredPwIsValid) {
    enteredPwFeedback = SIGNUP.PW_VALID_SUCCESS;
  }

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

  const signUpHandler = async (userInfo: EnteredUserInfo) => {
    const response = await authApi.signUp(userInfo);
    dispatch(tokenSaveHandler(response.data.token));
    alert(response.data.message);
    navigate("/main");
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) {
      alert("입력이 올바르지 않습니다.");
      return;
    }
    const userInfo = { email: enteredEmail, password: enteredPwCheck };
    signUpHandler(userInfo).catch((err) => alert(err));
  };

  return (
    <FormContainer onSubmit={submitHandler}>
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
    </FormContainer>
  );
};

export default SignUp;
