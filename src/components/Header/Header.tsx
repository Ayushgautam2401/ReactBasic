import React from 'react'
import logo from '../Photos/logo.png'

import './Header.scss'

function Header() {
  return (
    <div className='flex flex-row  width-100 flex-justify-between'>

      <div className='flex flex-row padding-2 flex-align-center padding-l-8'>
        <div className='logoElips width-100'>
          <img src={logo} alt='logo' />
        </div>
        <div className='text-bold text-white-color padding-l-2'>Retro</div>
      </div>

      <div className='flex flex-row flex-align-center padding-r-8 width-30 flex-justify-between'>
        <div className='text-white-color text-light'>#home</div>
        <div className='text-white-color text-light'>#works</div>
        <div className='text-white-color text-light'>#about-me</div>
        <div className='text-white-color text-light'>#contacts</div>
      </div>

    </div>
  )
}

export default Header