import { createContext, FC, useCallback, useContext, useState } from 'react'
import { setCookie } from 'utils/setCookie'
import { CookieKeys } from 'utils/constants'
import { AuthUser } from './types'

type AuthContextType = {
  authUser: AuthUser
  onSetUser: (authData: AuthUser) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type Props = {
  initialUser: AuthUser
}

const AuthProvider: FC<Props> = ({ children, initialUser }) => {
  const [authUser, setUser] = useState<AuthUser>(initialUser)

  const onSetUser = useCallback((authData: AuthUser) => {
    setCookie({ name: CookieKeys.auth, value: authData })
    setUser(authData)
  }, [])

  return <AuthContext.Provider value={{ authUser, onSetUser }}>{children}</AuthContext.Provider>
}

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
