import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/templates/Header/Header";

const Auth = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Auth;
