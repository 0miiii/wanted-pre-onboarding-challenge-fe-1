import React from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Main from "./pages/Main/Main"
import Header from "./components/templates/Header/Header"
import { PATH } from "./constants/path"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.SIGNUP} element={<Signup />} />
        <Route path={PATH.MAIN} element={<Main />} />
      </Routes>
    </>
  )
}

export default App
