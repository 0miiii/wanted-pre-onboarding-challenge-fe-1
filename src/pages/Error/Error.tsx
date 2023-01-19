import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  let redirect: string | undefined;

  if (pathname === "/") {
    redirect = "/main";
  }
  if (pathname === "/main") {
    redirect = "/";
  }

  useEffect(() => {
    if (redirect) {
      navigate(redirect);
    }
  }, [navigate, redirect]);

  return <div>Error</div>;
};

export default Error;
