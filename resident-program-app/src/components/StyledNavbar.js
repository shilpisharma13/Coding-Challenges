import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/programs'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Programs
      </NavLink>
      <NavLink
        to='/residents'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Residents
      </NavLink>
    </nav>
  )
}

export default StyledNavbar
