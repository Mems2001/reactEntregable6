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
    return <div className='logoutCont'>
      <h2>Logout</h2>
      <button className='logoutBtn' onClick={loggingOut} >
        <i className="fa-solid fa-person-walking-arrow-right"></i>
      </button>
      </div>
  }

  return (
    <div className='loginContainer'>
      <FormLogin />
    </div>
  )
}

export default Login