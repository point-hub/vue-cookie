import type { App } from 'vue'

export interface OptionsInterface {
  path?: string
  expires?: Date | string
  'max-age'?: number
}

const defaultOptions: OptionsInterface = {
  path: '/',
  expires: new Date(Date.now() + 86400e3),
}

let config: any = {}

function install(app: App<Element>, options: OptionsInterface) {
  config = {
    ...defaultOptions,
    ...options,
  }

  app.provide('cookie', config)

  app.config.globalProperties.$cookie = {
    getAll,
    get,
    set,
    remove,
  }
}

function get(name: string) {
  if (typeof document === 'undefined' || !name) {
    return
  }

  const cookies = document.cookie ? document.cookie.split('; ') : []

  for (let i = 0; i < cookies.length; i++) {
    const c = cookies[i]
    if (c.indexOf(name) == 0) {
      return decodeURIComponent(c.substring(name.length + 1, c.length))
    }
  }

  return
}

function getAll() {
  if (typeof document === 'undefined') {
    return
  }

  const cookies: any = document.cookie ? document.cookie.split('; ') : []
  const result: { [key: string]: string } = {}
  for (let i = 0; i < cookies.length; i++) {
    // Separate cookie name and value
    const cookie = cookies[i].split('=')
    // Decoding cookie
    cookie[0] = decodeURIComponent(cookie[0])
    cookie[1] = decodeURIComponent(cookie[1])
    // Push cookie into array
    result[cookie[0]] = cookie[1]
  }

  return result
}

function set(name: string, value: string, options: OptionsInterface = {}) {
  config = {
    ...defaultOptions,
    ...options,
  }

  if (config.expires instanceof Date) {
    config.expires = config.expires.toUTCString()
  }

  let formattedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

  for (const optionKey in config) {
    formattedCookie += '; ' + optionKey
    const optionValue = config[optionKey]
    if (optionValue !== true) {
      formattedCookie += '=' + optionValue
    }
  }

  document.cookie = formattedCookie
}

function remove(name: string) {
  set(decodeURIComponent(name), '', {
    'max-age': -1,
  })
}

export default { install, get, getAll, set, remove }
