import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/templates/Header/Header";
import Main from "./pages/Main/Main";
import Edit from "./pages/Edit/Edit";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import PATH from "./constants/path";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.SIGNUP} element={<SignUp />} />
        <Route path={PATH.MAIN} element={<Main />} />
        <Route path={PATH.EDIT} element={<Edit />} />
        <Route path={PATH.DETAIL} element={<Detail />} />
        <Route path="*" element={<div>잘못된 접근입니다.</div>} />
      </Routes>
    </>
  );
};

export default App;
