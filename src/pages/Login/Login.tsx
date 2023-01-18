import React, { useRef } from "react";
import styled from "styled-components";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginHandler } from "../../store/reducers/authSlice";
import { LOGIN } from "../../constants/auth";
import authApi from "../../apis/auth";
import Button from "../../components/atoms/Button/Button";

type LoginResponse = { token: string; message: string };

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

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = enteredEmail.current?.value;
    const password = enteredPassword.current?.value;

    if (email === "" && password === "") {
      alert("이메일과 비밀번호를 입력해주세요");
      return;
    }

    const userInfo = { email, password };
    authApi
      .login(userInfo)
      .then((response: AxiosResponse<LoginResponse>) => {
        dispatch(loginHandler(response.data.token));
        navigate("/main");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={submitHandler}>
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
    </form>
  );
};

export default Login;
