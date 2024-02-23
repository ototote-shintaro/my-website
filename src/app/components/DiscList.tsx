import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DiscList = () => {
	const contentList = [
		{
			path: 'winter-light-ensemble',
			src: 'https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/wle-jacket.jpg',
			alt: 'wle-jacket',
			title: '永​遠​と​一​日 / Eternity and a Day',
		},
		{
			path: 'shiori',
			src: 'https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/shiori-jac3.jpg',
			alt: 'shiori-jac',
			title: '夢は真冬の追憶のうちに凍る',
		},
		{
			path: 'fruhlingstraum',
			src: 'https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/fruhlingstraum-jacket.png?t=2023-10-11T15%3A09%3A29.117Z',
			alt: 'fruhlingstraum-jacket',
			title: '静かの基地 / はるのゆめ',
		},
		{
			path: 'moon-boat-sails',
			src: 'https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/moon-boat-jacket.jpg',
			alt: 'moon-boat-jacket',
			title: '静かの基地 / つきのふね',
		}
	];

	return (
		<div>
			<div className='md:grid md:grid-cols-2 md:mx-[12%]'>
				{contentList.map((item, index) => (
					<Content key={index} path={item.path} src={item.src} alt={item.alt} title={item.title} />
				))}
			</div>
		</div>
	);
}

export default DiscList;

type ContentProps = {
	path: string,
	src: string,
	alt: string,
	title: string,
}

const Content = ({ path, src, alt, title }: ContentProps) => {
	return (
		<div>
			<Link href={`discography/${path}`} className='hover:opacity-75'>
				<Image
					className='m-auto py-2 md:max-w-lg md:max-h-lg'
					src={src}
					alt={alt}
					width={756}
					height={210}
				/>
				<label className='cursor-pointer flex justify-center items-center pb-4'>{title}</label>
			</Link>
		</div>
	)
}
