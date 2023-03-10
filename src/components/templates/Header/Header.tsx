import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { tokenDeleteHandler } from "../../../store/reducers/authSlice";
import { RootState } from "../../../store/store";
import PATH from "../../../constants/path";
import { LOGIN } from "../../../constants/auth";
import Button from "../../atoms/Button/Button";
import Container from "./Header.styles";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const logoutBtnHandler = () => {
    dispatch(tokenDeleteHandler());
    alert(LOGIN.SUCCESS_LOGOUT);
    navigate(PATH.LOGIN);
  };

  return (
    <Container>
      {!isLoggedIn && (
        <>
          <Link to={PATH.LOGIN}>
            <Button>Login</Button>
          </Link>
          <Link to={PATH.SIGNUP}>
            <Button>SignUp</Button>
          </Link>
        </>
      )}
      {isLoggedIn && <Button onClick={logoutBtnHandler}>Logout</Button>}
    </Container>
  );
};

export default Header;
