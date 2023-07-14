import { AppContext } from '@/context'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuth } = React.useContext(AppContext)
  const location = useLocation()
  return !isAuth ? (
    <Navigate to={'/sign-in'} state={{ from: location }} replace />
  ) : (
    children
  )
}

export default ProtectedRoute
