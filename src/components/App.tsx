import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import useWindowWidth from "hooks/useWidowWidth"
import * as S from "components/styles"
import LoginContainer from "components/pages/login"
import Home from "components/pages/home/Home"
import PrivateRoute from "components/shared/PrivateRoute"

const App: React.FC = () => {
  const windowWidth = useWindowWidth()

  return (
    <Fragment>
      <S.GlobalStyle windowWidth={windowWidth} />
      <S.Wrapper>
        <PrivateRoute path="/" exact render={() => <Home />} />
        <Route path="/login" exact component={LoginContainer} />
      </S.Wrapper>
    </Fragment>
  )
}

export default App
