import React from "react";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router-dom";
import { PATH } from "../../../constants/path";
import Container from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Link to={PATH.LOGIN}>
        <Button>Login</Button>
      </Link>
      <Link to={PATH.SIGNUP}>
        <Button>SignUp</Button>
      </Link>
    </Container>
  );
};

export default Header;
