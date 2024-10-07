import React from 'react'
import Header from 'components/Header'
import WorkinProgess from '../components/Photos/workinProgess.gif'

import './HomePage.scss'

function HomePage() {
	return (
		<div className='flex flex-column background-primary-color '>
			<Header />
			<div className='flex flex-justify-center width-100'>
				<div className='flex flex-column'>
					<div className='text-8 text-white-color'>Ayush Gautam is a <span className='text-secondary-color'>web designer</span> and
						<span className='text-secondary-color'> front-end developer</span>
					</div>
					<div className='text-4 text-grey-1'>He crafts responsive websites where technologies meet creativity</div>
					<button className='padding-4 background-primary-color border-1 border-secondary-color text-white-color'>
						Contact me!!</button>
				</div>
			</div>
		</div>
	)
}

export default HomePage