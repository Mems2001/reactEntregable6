import React from 'react'
import { NavLink } from 'react-router-dom'

const NavComp = () => {
  return (
    <header className='headerCont'>
    <NavLink to='/' >
      <h1 className='headerTitle'>E-commerce</h1>
    </NavLink>
    <nav className="headerNav">
      <ul className="headerList">
        <li className="headerItem"><NavLink className={({isActive}) => isActive ? 'activeLink' : 'notActiveLink'} to='/login' >Login</NavLink></li>
        <li className="headerItem"><NavLink className={({isActive}) => isActive ? 'activeLink' : 'notActiveLink'} to='/purchases' >Purchases</NavLink></li>
        <li className="headerItem"><NavLink className={({isActive}) => isActive ? 'activeLink' : 'notActiveLink'} to='/cart' >Cart</NavLink></li>
      </ul>
    </nav>
  </header>
  )
}

export default NavComp