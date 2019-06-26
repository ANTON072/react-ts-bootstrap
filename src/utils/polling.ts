import Axios, { AxiosResponse } from "axios"
import { APP_SETTINGS } from "enums"
import * as api from "services/api"

interface Params {
  timeout: number
  interval: number
  asyncFunc: () => void
}

const polling = <T>(params: Params) => {
  // const { timeout, interval } = params
  // const endTime = Date.now() + timeout
  // const checkCondition = async (resolve: () => any, reject) => {
  //   const result = await params.asyncFunc()
  //   if (result) {
  //     resolve(result)
  //   } else if (Date.now() < endTime) {
  //     setTimeout(checkCondition, interval, resolve, reject)
  //   } else {
  //     reject(new Error(`timed out for ${asyncFunc}`))
  //   }
  // }
  // return new Promise(checkCondition)
}

export default polling
