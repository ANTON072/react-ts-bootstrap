import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { applyMiddleware, createStore } from "redux"
import createSagaMiddleware from "redux-saga"

// store
import reducer, { initialState } from "./store/reducers"
import rootSaga from "./store/effects"

import App from "./components/App"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware),
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
