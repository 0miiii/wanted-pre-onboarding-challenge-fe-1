import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { tokenSaveHandler } from "../../../store/reducers/authSlice";
import { LOGIN } from "../../../constants/auth";
import PATH from "../../../constants/path";
import authApi from "../../../apis/auth";
import Button from "../../atoms/Button/Button";
import { EnteredUserInfo } from "../../../types/user";
import AuthInput from "../../molecules/AuthInput/AuthInput";
import * as S from "./LoginForm.style";

const LoginForm = () => {
  const enteredEmail = useRef<HTMLInputElement>(null);
  const enteredPassword = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async (userInfo: EnteredUserInfo) => {
    const response = await authApi.login(userInfo);
    dispatch(tokenSaveHandler(response.data.token));
    alert(response.data.message);
    navigate(PATH.MAIN);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = enteredEmail.current?.value;
    const password = enteredPassword.current?.value;
    const userInfo = { email, password };

    if (email === "" && password === "") {
      alert(LOGIN.ENTER_YOUR_EMAIL_PASSWORD);
      return;
    }

    loginHandler(userInfo).catch((err) => alert(err));
  };

  return (
    <S.FormContainer onSubmit={submitHandler}>
      <h1>로그인</h1>
      <AuthInput
        placeholder={LOGIN.ENTER_YOUR_EMAIL}
        label="email"
        type="email"
        id="email"
        ref={enteredEmail}
      />
      <AuthInput
        placeholder={LOGIN.ENTER_YOUR_PASSWORD}
        label="password"
        type="password"
        id="password"
        ref={enteredPassword}
      />
      <S.BtnContainer>
        <Button>로그인</Button>
      </S.BtnContainer>
    </S.FormContainer>
  );
};

export default LoginForm;
