import { AppContext } from '@/context'
import { useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getRequest } from '@/api'
const useAutoLogin = ({ redirectLocation }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuth, login } = useContext(AppContext)

  const handleAutoLogin = (e: any) => {
    login(e.user, localStorage.getItem('jwt') || '')

    navigate(redirectLocation)
  }
  useEffect(() => {
    if (!isAuth) {
      const token = localStorage.getItem('jwt')
      if (token) {
        getRequest({ url: 'auto-login', token, success: handleAutoLogin })
      }
    }
  }, [])
}
export default useAutoLogin
