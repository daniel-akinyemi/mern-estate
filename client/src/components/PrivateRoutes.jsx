import { UseSelector, useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes   = () => {
    const {currentuser} = useSelector((state)  => state.user)
  return (
    currentuser ? <Outlet/> : <Navigate to='/sign-in' />
  )
}

export default PrivateRoutes  