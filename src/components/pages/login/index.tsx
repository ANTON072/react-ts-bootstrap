import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { ApplicationState } from "store/types"
import { loginInput, loginRequest } from "store/actions"
import { Redirect } from "react-router-dom"
import Login from "./Login"

const LoginContainer = () => {
  const store = useSelector((state: ApplicationState) => state)
  const dispatch = useDispatch()
  const {
    auth,
    pages: { login },
  } = store

  if (auth.authToken) {
    const redirectTo = login.from ? login.from : "/"

    return <Redirect to={redirectTo} />
  }

  return (
    <Login
      onInput={(params: { name: "email" | "password"; value: string }) =>
        dispatch(loginInput(params))
      }
      onLogin={() => dispatch(loginRequest())}
      {...login}
    />
  )
}

export default LoginContainer
