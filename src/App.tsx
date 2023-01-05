import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/templates/Header/Header";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { PATH } from "./constants/path";

function App() {
  const [token, setToken] = useState<string | null>("");
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);

  if (token) {
    navigate("/main");
  }

  return (
    <>
      <Header token={token} deleteToken={setToken} />
      <Routes>
        <Route path={PATH.LOGIN} element={<Login addToken={setToken} />} />
        <Route path={PATH.SIGNUP} element={<SignUp addToken={setToken} />} />
        <Route path={PATH.MAIN} element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
