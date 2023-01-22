import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Todo from "./pages/Todo/Todo";
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
        <Route path={PATH.MAIN} element={isLogin ? <Todo /> : <Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </GlobalLayout>
  );
};

export default App;
