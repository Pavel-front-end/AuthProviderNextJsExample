import { IncomingMessage } from 'http'
import { CookieKeys } from 'utils/constants'
import { parseCookies } from 'utils/parseCookies'
import { AuthUser } from './types'

export const getInitialAuth = (req?: IncomingMessage): AuthUser => {
  const cookies = parseCookies(req)
  const userCookie = cookies?.[CookieKeys.auth]
  return userCookie ? JSON.parse(userCookie) : {}
}
