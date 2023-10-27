"use client"
import { faArrowUpRightFromSquare, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
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
			{/* PC Menu */}
			<div className='hidden md:block'>
				<h1 className='text-xl font-bold text-center py-4'>
					<Link href='/'>
						Shintaro Tanaka
					</Link>
				</h1>
				<ul className='flex justify-center items-center py-4 gap-10'>
					<li>
						<Link href='/'>home</Link>
					</li>
					<li>
						<Link href='/article'>news</Link>
					</li>
					<li>
						<Link href='/concert'>concert</Link>
					</li>
					<li>
						<Link href='/biography'>biography</Link>
					</li>
					<li>
						<Link href='/discography'>discography</Link>
					</li>
					<li>
						<Link href='/video'>video</Link>
					</li>
					<li>
						<Link href='/contact'>contact</Link>
					</li>
					<li>
						<Link
							href='https://ototote.official.ec/'
							target='_blank'
							className='px-3 flex items-center border-2 py-2 rounded-lg'
						>
							<label className='text-center text-sm cursor-pointer'>Online Shop</label>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-[16px] ml-2'/>
						</Link>
					</li>
				</ul>
			</div>
			{/* SP Menu */}
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
						<li>
							<Link onClick={handleMenuClose} href='/'>home</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/article'>news</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/concert'>concert</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/biography'>biography</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/discography'>discography</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/video'>video</Link>
						</li>
						<li>
							<Link onClick={handleMenuClose} href='/contact'>contact</Link>
						</li>
						<li>
							<Link
								onClick={handleMenuClose}
								href='https://ototote.official.ec/'
								target='_blank'
							>
								Online Shop
								<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-[16px] ml-2'/>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
