import React from 'react'
import { NavLink } from 'react-router-dom'

const NavComp = () => {
  return (
    <header>
    <NavLink to='/' >
      <h1>E-commerce</h1>
    </NavLink>
    <nav className="headerNav">
      <ul className="headerList">
        <li className="headerItem"><NavLink className={({isActive}) => isActive ? 'activeLink' : '' } to='/login' >Login</NavLink></li>
        <li className="headerItem"><NavLink className={({isActive}) => isActive ? 'activeLink' : '' } to='/purchases' >Purchases</NavLink></li>
        <li className="headerItem">Cart</li>
      </ul>
    </nav>
  </header>
  )
}

export default NavComp