import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Error from "./pages/Error/Error";
import PATH from "./constants/path";
import GlobalLayout from "./layouts/GlobalLayout/GlobalLayout";

const App = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <GlobalLayout>
      <Routes>
        <Route path={PATH.LOGIN} element={!isLogin ? <Login /> : <Error />} />
        <Route path={PATH.SIGNUP} element={<SignUp />} />
        <Route path={PATH.MAIN} element={isLogin ? <Main /> : <Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </GlobalLayout>
  );
};

export default App;
