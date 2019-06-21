import React, { Fragment, Suspense } from "react"
import { Route } from "react-router-dom"
import useWindowWidth from "hooks/useWidowWidth"
import * as S from "components/styles"
import PrivateRoute from "components/shared/PrivateRoute"

const Home = React.lazy(() => import("components/pages/home/Home"))
const LoginContainer = React.lazy(() => import("components/pages/login"))

const App: React.FC = () => {
  const windowWidth = useWindowWidth()

  return (
    <Fragment>
      <S.GlobalStyle windowWidth={windowWidth} />
      <S.Wrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <PrivateRoute path="/" exact render={() => <Home />} />
          <Route path="/login" exact component={LoginContainer} />
        </Suspense>
      </S.Wrapper>
    </Fragment>
  )
}

export default App
