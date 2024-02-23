import React from 'react'
import ContactList from '../components/ContactList'

const page = () => {
	return (
		<div>
			<title>Contact</title>
			<h1 className='text-title'>Contact</h1>
			<div className='pt-6'>
				<ContactList />
			</div>
		</div>
	)
}

export default page