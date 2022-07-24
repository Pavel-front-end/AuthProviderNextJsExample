import { IncomingMessage } from 'http'
import cookie from 'cookie'

export const parseCookies = (req: IncomingMessage | undefined): Record<string, string> | undefined => {
  const cookies = req ? req.headers.cookie : document.cookie
  return cookies ? cookie.parse(cookies) : undefined
}
