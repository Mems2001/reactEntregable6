import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLogin, setLogout } from '../../store/slices/user.slice'

const NavComp = () => {

  const [forMenu, setForMenu] = useState(false)

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

  const showMenu = () => {
    setForMenu(true)
  }

  const hideMenu = () => {
    setForMenu(false)
  }

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

    {/* MOBILE */}

    <button className='mobileNav' onClick={showMenu}>
      <i className="fa-solid fa-bars menuIcon"></i>
    </button>

    <section className={`mobileMenu showMenu${forMenu}`}>
      <ul className={`linksContainerMob showMenu${forMenu}`}>
        <li className='mobileLinks' ><NavLink to='/login'>Login</NavLink></li>
        <li className='mobileLinks' ><NavLink to='/purchases'>Purchases</NavLink></li>
        <li className='mobileLinks' ><NavLink to='/cart'>Cart</NavLink></li>
      </ul>
      <button className={`mobileCloseBtn showMenu${forMenu}`} onClick={hideMenu} >X</button>
    </section>

    <section className={`mobBackMenu showBack${forMenu}`}></section>

  </header>
  )
}

export default NavComp