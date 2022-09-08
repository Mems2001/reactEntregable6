import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin, setLogout } from '../../store/slices/user.slice'
import FormLogin from '../Login/FormLogin'

const Login = () => {

  const logged = useSelector(state => state.userSlice)

  useEffect (
    () => {
      if (localStorage.getItem('token') ) {

        dispatch (setLogin())
  
        } else {
          setLogout ()
        }
    } , [logged]
  )

  const dispatch = useDispatch()

  const loggingOut = () => {
    localStorage.removeItem('token')
    dispatch( setLogout() )
  }

  if (logged) {
    return <button onClick={loggingOut} >Logout</button>
  }

  return (
    <div>
      <FormLogin />
    </div>
  )
}

export default Login