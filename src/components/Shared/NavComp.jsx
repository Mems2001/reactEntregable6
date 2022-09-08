import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLogin, setLogout } from '../../store/slices/user.slice'

const NavComp = () => {

  const logged = useSelector (state => state.userSlice)

  const dispatch = useDispatch()

  useEffect (
    () => {

      if (localStorage.getItem('token') ) {

      dispatch ( setLogin () )

      } else {
        setLogout ()
      }
    }, [logged]
  )

  return (
    <header className='headerCont'>
    <NavLink to='/' >
      <h1 className='headerTitle'>E-commerce</h1>
    </NavLink>
    <nav className="headerNav">
      <ul className="headerList">
        <li className="headerItem"><NavLink className={({isActive}) => isActive ? 'activeLink' : 'notActiveLink'} to='/login' >{ logged ? 'Logout' : 'Login' }</NavLink></li>
        <li className="headerItem"><NavLink className={({isActive}) => isActive ? 'activeLink' : 'notActiveLink'} to='/purchases' >Purchases</NavLink></li>
        <li className="headerItem"><NavLink className={({isActive}) => isActive ? 'activeLink' : 'notActiveLink'} to='/cart' >Cart</NavLink></li>
      </ul>
    </nav>
  </header>
  )
}

export default NavComp