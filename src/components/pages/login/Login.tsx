import React from "react"
import { Link } from "react-router-dom"
import { LoginPageState } from "store/types"
import ImgJpg from "components/shared/img/1.jpg"
import * as S from "./styles"

export interface Props extends LoginPageState {
  onInput: (params: { name: "email" | "password"; value: string }) => void
  onLogin: () => void
}
const Login = (params: Props) => {
  const { onInput, onLogin, input, loading } = params
  const handleSubmimt = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  const handleInput = (name: "email" | "password") => (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onInput({ name, value: e.target.value })
  }

  return (
    <S.Wrapper>
      <div>
        <img src={ImgJpg} alt="" />
      </div>
      <form onSubmit={handleSubmimt}>
        <div>
          <input
            type="text"
            placeholder="email"
            onChange={handleInput("email")}
            value={input.email}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            onChange={handleInput("password")}
            value={input.password}
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            submit
          </button>
        </div>
      </form>
      <p>
        <Link to="/">Home</Link>
      </p>
    </S.Wrapper>
  )
}

export default Login
