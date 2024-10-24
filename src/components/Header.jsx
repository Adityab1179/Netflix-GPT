import React from 'react'
import logo from "../assets/Netflix_Logo_PMS.png"
const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-10'>
        <img className='w-44' src={logo} alt="logo"/>
    </div>
  )
}

export default Header