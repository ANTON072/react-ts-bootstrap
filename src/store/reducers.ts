import { ApplicationState, ApplicationAction } from "./types"

export const initialState: ApplicationState = {
  app: {
    error: null,
  },
  auth: {
    authToken: "",
  },
  pages: {
    login: {
      loading: false,
      input: {
        email: "",
        password: "",
      },
      error: {
        email: undefined,
        password: undefined,
      },
      from: null,
    },
  },
}

// eslint-disable-next-line consistent-return
const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "appError": {
      const draft = { ...state }
      draft.app.error = action.payload

      return { ...state, ...draft }
    }
    case "loginInput": {
      const draft = { ...state }
      const { name, value } = action.payload
      draft.pages.login.input[name] = value

      return { ...state, ...draft }
    }
    case "loginRequest": {
      const draft = { ...state }
      draft.pages.login.loading = true

      return { ...state, ...draft }
    }
    case "loginSuccess": {
      const draft = { ...state }
      const { authToken } = action.payload
      draft.pages.login.loading = false
      draft.auth.authToken = authToken

      return { ...state, ...draft }
    }
    case "loginFailure": {
      const draft = { ...state }
      draft.pages.login.loading = false
      // if (action.payload.error) {
      //   draft.pages.login.error = action.payload
      // }

      return { ...state, ...draft }
    }
    case "redirectFrom": {
      const draft = { ...state }
      draft.pages.login.from = action.payload

      return { ...state, ...draft }
    }
    default: {
      return state
    }
  }
}

export default reducer
