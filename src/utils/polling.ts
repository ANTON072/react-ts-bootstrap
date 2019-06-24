import { AxiosResponse } from "axios"

interface Params {
  asyncFunc: () => AxiosResponse
  timeout: number
  interval: number
}

const polling = ({ asyncFunc, interval, timeout }: Params) => {
  const endTime = Date.now() + timeout
  const checkCondition = async (
    resolve: (value?: AxiosResponse) => void,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reject: (reason?: Error) => void,
  ) => {
    try {
      const response = await asyncFunc()
      if (response.status === 200) {
        resolve(response)
      } else if (response.status < 500 && Date.now() < endTime) {
        setTimeout(checkCondition, interval, resolve, reject)
      } else {
        throw new Error("タイムアウトかネットワークエラーが発生")
      }
    } catch (error) {
      reject(new Error(error))
    }
  }

  return new Promise(checkCondition)
}

export default polling
