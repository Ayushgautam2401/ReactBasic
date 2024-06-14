import React from 'react'
import Header from 'components/Header'
import WorkinProgess from '../components/Photos/workinProgess.gif'

import './HomePage.scss'

function HomePage() {
	return (
		<div className='flex flex-column MainContainer '>
			<Header />
			<div className='flex flex-justify-center'>
				<img src={WorkinProgess} alt="" width={"50%"} /></div>
		</div>
	)
}

export default HomePage