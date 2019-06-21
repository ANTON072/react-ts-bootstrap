import _ from "lodash"

export const walk = <T>(params: T, cb: (s: string) => string): T => {
  const res = (Array.isArray(params) ? [] : {}) as T

  _.forOwn(params, (value, key) => {
    let _value = value
    if (_.isPlainObject(_value) || Array.isArray(_value)) {
      _value = walk(_value, cb)
    }

    const x = cb(key) as keyof T
    res[x] = _value
  })

  return res
}

export const toCamel = <T>(params: T) => {
  return walk(params, key => _.camelCase(key))
}

export const toSnake = <T>(params: T) => {
  return walk(params, key => _.snakeCase(key))
}
