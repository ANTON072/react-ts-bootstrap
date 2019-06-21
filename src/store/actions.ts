import { LocationState } from "history"
import { AxiosError } from "axios"

export const appError = (error: AxiosError) =>
  ({ type: "appError", payload: error } as const)

export const loginRequest = () =>
  ({
    type: "loginRequest",
  } as const)

export const loginSuccess = (authToken: string) =>
  ({
    type: "loginSuccess",
    payload: { authToken },
  } as const)

export const loginFailure = (error: AxiosError) =>
  ({
    type: "loginFailure",
    payload: error,
    error: !error.response || error.response.status >= 500,
  } as const)

export const loginInput = ({
  name,
  value,
}: {
  name: "email" | "password"
  value: string
}) =>
  ({
    type: "loginInput",
    payload: { name, value },
  } as const)

export const redirectFrom = (location: LocationState) =>
  ({
    type: "redirectFrom",
    payload: location,
  } as const)

export const fetchUsers = () =>
  ({
    type: "fetchUsers",
  } as const)

export const searchByLocation = () =>
  ({
    type: "searchByLocation",
  } as const)
