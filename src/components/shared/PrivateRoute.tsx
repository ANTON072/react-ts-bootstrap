/**
 * ログインが必要なページをラップするコンポーネント
 */
import React from "react"
import { Route, Redirect, RouteProps } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { ApplicationState } from "store/types"
import { redirectFrom } from "store/actions"

const PrivateRoute = ({ render, ...rest }: RouteProps) => {
  const store = useSelector((state: ApplicationState) => state)
  const dispatch = useDispatch()

  const {
    auth: { authToken },
  } = store

  return (
    <Route
      {...rest}
      render={
        authToken
          ? render
          : ({ location }) => {
              dispatch(redirectFrom(location))

              return <Redirect to="/login" />
            }
      }
    />
  )
}

export default PrivateRoute
