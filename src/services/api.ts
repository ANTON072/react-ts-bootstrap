import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { toCamel, toSnake } from "utils/convertKeys"
import _ from "lodash"

// 後からクライアントにトークンを追加する
// https://github.com/axios/axios#config-defaults
// instance.defaults.headers.common.Authorization = AUTH_TOKEN

/**
 * apiクライアントを作成する
 */
export function createClient(
  requestConfig: AxiosRequestConfig | undefined = undefined,
) {
  const instance = axios.create(requestConfig)
  // リクエスト処理を共通化
  instance.interceptors.request.use(config => {
    if (!config.data) return config
    if (config.data instanceof URLSearchParams) {
      // Formの場合
      return config
    }
    // JSONの場合
    const copiedData = _.cloneDeep(config)
    copiedData.data = toSnake(config.data)

    return copiedData
  })

  // レスポンス処理を共通化
  instance.interceptors.response.use(response => {
    const data = toCamel(response.data)
    response.data = data

    return response
  })

  return instance
}

class Api {
  // トークンなしのAPIクライアント
  private _client: AxiosInstance

  // トークン付きのAPIクライアント
  private _authClient: AxiosInstance

  /**
   * オブジェクトをURLSearchParams形式に変更する
   * @param obj
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static objToUrlSearchParams(obj: Record<string, any>) {
    const formatted = new URLSearchParams()
    _.each(obj, (value, name) => {
      formatted.append(_.snakeCase(name), value)
    })

    return formatted
  }

  constructor() {
    // トークンなしクライアント
    this._client = createClient({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 5000,
    })
    // トークンありクライアント
    this._authClient = createClient({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      timeout: 5000,
    })
  }

  /**
   * Getter
   */
  get client() {
    return this._client
  }

  get authClient() {
    return this._authClient
  }
}

const api = new Api()

export default api

export const login = (params: { email: string; password: string }) => {
  return api.client.post("/login", params)
}
