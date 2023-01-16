import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/templates/Header/Header";
import Main from "./pages/Main/Main";
import Edit from "./pages/Edit/Edit";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { PATH } from "./constants/path";

const App = () => {
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);

  return (
    <>
      <Header token={token} deleteToken={setToken} />
      <Routes>
        <Route path={PATH.LOGIN} element={<Login addToken={setToken} />} />
        <Route path={PATH.SIGNUP} element={<SignUp addToken={setToken} />} />
        <Route path={PATH.MAIN} element={<Main />} />
        <Route path={PATH.EDIT} element={<Edit />} />
        <Route path={PATH.DETAIL} element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
