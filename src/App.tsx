import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main/Main";
import LoginForm from "./components/templates/LoginForm/LoginForm";
import SignupForm from "./components/templates/SignupForm/SignupForm";
import { PATH } from "./constants/path";

function App() {
  return (
    <>
      <Routes>
        <Route path={PATH.AUTH} element={<Auth />}>
          <Route path={PATH.LOGIN} element={<LoginForm />} />
          <Route path={PATH.SIGNUP} element={<SignupForm />} />
        </Route>
        <Route path={PATH.MAIN} element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
