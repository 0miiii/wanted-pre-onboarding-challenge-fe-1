import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import { PATH } from "../../../constants/path";
import Container from "./Header.styles";

const Header: React.FC<{
  token: string | null;
  deleteToken: React.Dispatch<React.SetStateAction<string | null>>;
}> = ({ token, deleteToken }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    deleteToken(localStorage.getItem("token"));
    alert("로그아웃 성공");
    navigate("/login");
  };

  return (
    <Container>
      {!token ? (
        <>
          <Link to={PATH.LOGIN}>
            <Button>Login</Button>
          </Link>
          <Link to={PATH.SIGNUP}>
            <Button>SignUp</Button>
          </Link>
        </>
      ) : (
        <Button onClick={logoutHandler}>Logout</Button>
      )}
    </Container>
  );
};

export default Header;
