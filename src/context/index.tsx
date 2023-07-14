import React, { ReactNode, createContext, useState } from 'react'

const initialValue = {
  isAuth: false,
  user: {},
  login: () => undefined,
  logout: () => undefined
}
interface IAppContext {
  isAuth: boolean
  user: object
  login: (user: object, token: string) => void
  logout: () => void
}
export const AppContext = createContext<IAppContext>(initialValue)

interface IAppProvider {
  children: ReactNode
}
const AppProvider = ({ children }: IAppProvider) => {
  const [isAuth, setAuth] = useState<boolean>(false)
  const [user, setUser] = useState<object>({})

  function login(user: object, token: string) {
    localStorage.setItem('jwt', token)
    setUser(user)
    setAuth(true)
  }
  function logout() {
    localStorage.removeItem('jwt')
    setUser({})
    setAuth(false)
  }

  return (
    <AppContext.Provider
      value={{
        isAuth,
        user,
        login,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
