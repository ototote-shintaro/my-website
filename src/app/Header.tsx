"use client"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
	const [isOpen, setOpen] = useState<boolean>(false)
	const handleMenuOpen = () => {
		setOpen(!isOpen)
	}
	const handleMenuClose = () => {
		setOpen(false)
	}

	return (
		<header className='my-8'>
			<div className='hidden md:block'>
				<h1 className='text-xl font-bold text-center py-4'>Shintaro Tanaka</h1>
				<ul className='flex justify-center py-4'>
					<li className='px-6 text-center'>home</li>
					<li className='px-6 text-center'>
						<Link href='/article'>news</Link>
					</li>
					<li className='px-6 text-center'>biography</li>
					<li className='px-6 text-center'>discography</li>
					<li className='px-6 text-center'>video</li>
					<li className='px-6 text-center'>
						<Link href='/contact'>contact</Link>
					</li>
				</ul>
			</div>
			<div className='md:hidden'>
				<div className='flex justify-center items-center'>
					<h1 className='text-xl font-bold z-50'>Shintaro Tanaka</h1>
					<button className='absolute right-0 mr-6 z-50' onClick={handleMenuOpen}>
						{isOpen
							? <FontAwesomeIcon icon={faXmark} className='h-6' />
							: <FontAwesomeIcon icon={faBars} className='h-6' />
						}
					</button>
				</div>
				<nav className={
					isOpen
						? 'bg-blue-100 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col'
						: 'fixed right-[-100%]'
				}>
					<ul className={
						isOpen
							? 'flex h-screen justify-center items-center flex-col gap-6 text-lg'
							: 'block'
					}>
						<li>home</li>
						<li>
							<Link onClick={handleMenuClose} href='/article'>news</Link>
						</li>
						<li>biography</li>
						<li>discography</li>
						<li>video</li>
						<li>
							<Link onClick={handleMenuClose} href='/contact'>contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
