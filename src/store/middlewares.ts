import { Dispatch, Middleware, MiddlewareAPI } from "redux"
import _ from "lodash"
import { ApplicationAction } from "./types"
import { appError } from "./actions"

export const errorsMiddleware: Middleware = <T>({
  dispatch,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
MiddlewareAPI) => (next: Dispatch) => (action: any): ApplicationAction => {
  if (action.type) {
    const isFail = new RegExp("Fail", "g")
    if (action.type.match(isFail) && !_.isUndefined(action.error)) {
      dispatch(appError(action.payload))
    }
  }

  return next(action)
}
