import React from "react"
import { LOGIN } from "../../../constants/path"
import Button from "../../atoms/Button/Button"

const LoginForm = () => {
  return (
    <main>
      <input type="text" placeholder={LOGIN.EMAIL} />
      <input type="text" placeholder={LOGIN.PW} />
      <Button>로그인</Button>
      <Button>회원가입</Button>
    </main>
  )
}

export default LoginForm
