import { FC }  from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

interface PrivateRouteProps {
  children: React.ReactElement
}
const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useAuth()

  if(!user) {
    return <Navigate to='/signup' replace={true}/>
  }

  return children
}

export default PrivateRoute
