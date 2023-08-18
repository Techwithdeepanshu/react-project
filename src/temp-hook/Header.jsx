import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='head'>
    <a href='./'>My App</a>
    <ul>
        <li><NavLink to='./'>Home</NavLink></li>
        <li><NavLink to='./html'>HTML</NavLink></li>
        <li><NavLink to='./css'>CSS</NavLink></li>
        <li><NavLink to='./javascript'>JAVASCRIPT</NavLink></li>
        <li><NavLink to='./java'>JAVA</NavLink></li>
      
    </ul>
</div>
  )
}

export default Header