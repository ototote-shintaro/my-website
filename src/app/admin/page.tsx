import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<div>
			<ul className='flex flex-col justify-center items-center gap-6 text-lg'>
				<li>
					<Link href='/admin/article/new'>
						news作成
					</Link>
				</li>
				<li>
					<Link href='/admin/concert/new'>
						ライブ情報作成
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default page
