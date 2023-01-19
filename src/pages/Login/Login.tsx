import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { tokenSaveHandler } from "../../store/reducers/authSlice";
import { LOGIN } from "../../constants/auth";
import authApi from "../../apis/auth";
import FormContainer from "./Login.style";
import Button from "../../components/atoms/Button/Button";
import { EnteredUserInfo } from "../../types/user";

const InputContainer = styled.div`
  background-color: antiquewhite;
  border-radius: 5px;
  width: 70%;
  padding: 10px;
  margin: 10px;
`;

const Login = () => {
  const enteredEmail = useRef<HTMLInputElement>(null);
  const enteredPassword = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async (userInfo: EnteredUserInfo) => {
    const response = await authApi.login(userInfo);
    dispatch(tokenSaveHandler(response.data.token));
    alert(response.data.message);
    navigate("/main");
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = enteredEmail.current?.value;
    const password = enteredPassword.current?.value;
    const userInfo = { email, password };

    if (email === "" && password === "") {
      alert("이메일과 비밀번호를 입력해주세요");
      return;
    }

    loginHandler(userInfo).catch((err) => alert(err));
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <InputContainer>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          placeholder={LOGIN.EMAIL}
          ref={enteredEmail}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          placeholder={LOGIN.PW}
          ref={enteredPassword}
        />
      </InputContainer>
      <Button>로그인</Button>
    </FormContainer>
  );
};

export default Login;
