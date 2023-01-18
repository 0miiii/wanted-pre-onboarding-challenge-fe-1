import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import PATH from "./constants/path";
import GlobalLayout from "./layouts/GlobalLayout/GlobalLayout";

const App = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <GlobalLayout>
      <Routes>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.SIGNUP} element={<SignUp />} />
        <Route path={PATH.MAIN} element={isLogin && <Main />} />
        <Route path="*" element={<div>잘못된 접근입니다.</div>} />
      </Routes>
    </GlobalLayout>
  );
};

export default App;
