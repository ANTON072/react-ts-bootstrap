import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import { errorsMiddleware } from "store/middlewares"
import { composeWithDevTools } from "remote-redux-devtools"

// store
import App from "components/App"
import reducer, { initialState } from "store/reducers"
import rootSaga from "store/effects"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware, errorsMiddleware)),
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
)
