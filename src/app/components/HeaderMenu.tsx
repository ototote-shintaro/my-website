import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const HeaderMenu = () => {
	return (
		<div>
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
	)
}

export default HeaderMenu