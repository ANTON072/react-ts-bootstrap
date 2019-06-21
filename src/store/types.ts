import { ActionType } from "redux-actions-type"
import * as actions from "./actions"

/**
 * State
 */

export interface AuthState {
  authToken: string
}

export interface LoginInputState {
  email: string
  password: string
}

export interface LoingErrorState {
  email: string[] | undefined
  password: string[] | undefined
}

export interface LoginPageState {
  input: LoginInputState
  error: LoingErrorState
  loading: boolean
  from: History | null
}

export interface ApplicationState {
  auth: AuthState
  pages: {
    login: LoginPageState
  }
}

/**
 * Action
 */

export type ApplicationAction = ActionType<typeof actions>
