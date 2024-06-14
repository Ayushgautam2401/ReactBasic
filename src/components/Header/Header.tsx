import React from 'react'
import logo from '../Photos/logo.png'

import './Header.scss'

function Header() {
	return (
		<div className='flex flex-row mainHeader width-100 flex-justify-between'>

			<div className='flex flex-row padding-2 flex-align-center padding-l-8'>
				<div className='logoElips width-100'>
					<img src={logo} alt='logo' />
				</div>
				<div className='text-bold padding-l-2'>Retro</div>
			</div>

			<div className='flex flex-row flex-align-center padding-r-8'>
				<div className='text-bold'>Home</div>
				<div className='text-bold padding-r-4 padding-l-4'>About Me</div>
				<div className='text-bold'>Contact Me</div>
			</div>

		</div>
	)
}

export default Header