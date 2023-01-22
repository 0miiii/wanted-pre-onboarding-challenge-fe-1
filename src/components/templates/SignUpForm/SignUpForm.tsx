import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import authApi from "../../../apis/auth";
import { tokenSaveHandler } from "../../../store/reducers/authSlice";
import { SIGNUP } from "../../../constants/auth";
import { isEmail, isMoreThan8Length, doMatch } from "../../../utils/validCheck";
import Button from "../../atoms/Button/Button";
import AuthInput from "../../molecules/AuthInput/AuthInput";
import { EnteredUserInfo } from "../../../types/user";
import PATH from "../../../constants/path";
import * as S from "./SignUpForm.style";

const SignUpForm = () => {
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

  const signUpHandler = async (userInfo: EnteredUserInfo) => {
    const response = await authApi.signUp(userInfo);
    dispatch(tokenSaveHandler(response.data.token));
    alert(response.data.message);
    navigate(PATH.MAIN);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) {
      alert(SIGNUP.INVALID_INPUT);
      return;
    }
    const userInfo = { email: enteredEmail, password: enteredPwCheck };
    signUpHandler(userInfo).catch((err) => alert(err));
  };
  return (
    <S.FormContainer onSubmit={submitHandler}>
      <h1>회원가입</h1>
      <AuthInput
        label="email"
        id="email"
        type="email"
        enteredValue={setEnteredEmail}
        inputTouched={setEmailInputTouched}
        inputFeedBack={enteredEmailFeedback}
        placeholder={SIGNUP.ENTER_YOUR_EMAIL}
      />
      <AuthInput
        label="password"
        id="password"
        type="password"
        enteredValue={setEnteredPw}
        inputTouched={setPwInputTouched}
        inputFeedBack={enteredPwFeedback}
        placeholder={SIGNUP.ENTER_YOUR_PASSWORD}
      />
      <AuthInput
        label="password check"
        id="password-check"
        type="password"
        enteredValue={setEnteredPwCheck}
        inputTouched={setCheckInputTouched}
        inputFeedBack={enteredPwCheckFeedback}
        placeholder={SIGNUP.ENTER_YOUR_PASSWORD}
      />
      <S.BtnContainer>
        <Button disabled={!isFormValid}>가입하기</Button>
      </S.BtnContainer>
    </S.FormContainer>
  );
};

export default SignUpForm;
