import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<div>
			<title>つきのふね</title>
			<h1 className='text-title'>つきのふね / The Moon Boat Sails</h1>
			<Image
				className='m-auto py-2 md:max-w-lg md:max-h-lg'
				src='https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/moon-boat-image.png'
				alt='moon-boat-image'
				width={700}
				height={700}
			/>
			<div className='flex justify-center items-center'>
				<iframe
					className="w-[700px] h-32"
					src="https://bandcamp.com/EmbeddedPlayer/album=2845056811/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
					seamless
				/>
			</div>
			<Link
				href="https://shintaro-tanaka.bandcamp.com/album/the-moon-boat-sails"
				className='hover:opacity-75 text-center text-sm text-blue-500'
			>
				<p>つきのふね / THE MOON BOAT SAILS by 静かの基地</p>
			</Link>
			<div className='text-center whitespace-pre-line mx-4'>
				<p className='py-4'>
					{`都会の夜景を見下ろすよりも、静かに夜空を見上げていたい。
						このアルバムの主題は、月や星といった手の届かない場所にあるもの。`}
				</p>
				<p className='py-2'>
					{`In the nighttime, I'd rather look up the stars than look down over cities.
						The theme of this cd is things unreachable in our life such as the moon and stars.
						I always love those things far away.`}
				</p>
			</div>
			<div className='my-4'>
				<p className='text-center'>CDのご購入はこちらから</p>
				<Link
					href='https://ototote.official.ec/items/67881532'
					className='hover:opacity-75 text-center text-blue-500'
					target='_blank'
				>
					<p>https://ototote.official.ec/items/67881532</p>
				</Link>
			</div>
		</div>
	)
}

export default page