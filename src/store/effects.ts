import { call, all, put, takeLatest, select } from "redux-saga/effects"
import * as api from "services/api"
import { ApplicationState, ApplicationAction } from "./types"
import { loginSuccess, loginFailure } from "./actions"

function* handleLogin() {
  const state: ApplicationState = yield select()
  const { input } = state.pages.login
  try {
    const response = yield call(api.login, input)
    console.log("response:", response)
  } catch (error) {
    yield put(loginFailure(error))
  }
}

const registerSagas = [
  takeLatest(
    (action: ApplicationAction) => action.type === "loginRequest",
    handleLogin,
  ),
]

export default function* rootSaga() {
  yield all([...registerSagas])
}
