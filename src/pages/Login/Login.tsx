import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LOGIN } from "../../constants/auth";
import Button from "../../components/atoms/Button/Button";
import { auth_request } from "../../apis/auth";

const Login: React.FC<{
  addToken: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ addToken }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPW, setInputPW] = useState("");
  const navigate = useNavigate();

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputPW(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputEmail === "" && inputPW === "") {
      alert("이메일과 비밀번호를 입력해주세요");
      return;
    }
    const userInfo = { email: inputEmail, password: inputPW };
    const response = await auth_request("login", userInfo);
    alert(response.message);
    localStorage.setItem("token", response.token);
    addToken(response.token);
    navigate("/main");
    return;
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        placeholder={LOGIN.EMAIL}
        onChange={emailChangeHandler}
      />
      <input
        type="password"
        placeholder={LOGIN.PW}
        onChange={passwordChangeHandler}
      />
      <Button>로그인</Button>
    </form>
  );
};

export default Login;
