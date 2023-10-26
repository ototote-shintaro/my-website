import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<div>
			<title>Frühlingstraum</title>
			<h1 className='text-title'>はるのゆめ</h1>
			<div className='flex justify-center items-center'>
				<iframe
					className="w-[350px] h-[470px]"
					src="https://bandcamp.com/EmbeddedPlayer/album=1789375327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
					seamless>
				</iframe>
			</div>
			<Link
				href="https://shintaro-tanaka.bandcamp.com/album/fruhlingstraum"
				className='hover:opacity-75 text-center text-blue-500'
			>
				<p>はるのゆめ / Fruhlingstraum by 静かの基地</p>
			</Link>
			<div className='text-center whitespace-pre-line py-6'>
				<h2 className='text-lg font-bold pt-4 pb-2'>ADDITIONAL MUSICIANS</h2>
				<p>
					{`黒澤勇人（毛玉）Vocal T2
						佐藤公哉（3日満月）Vocal T6
						権頭真由（3日満月）Vocal, Piano T6
						酒井 麻由佳 Piano T1
						仲山 歩 Flute T1, T4
						誓山 藍 ViolinT1, T4
						古田 葵 Viola T1, T4
						岩谷詩織 Cello T1, T4`}
				</p>
				<h2 className='text-lg font-bold pt-4 pb-2'>SPECIAL GUESTS</h2>
				<p>
					{`一ノ瀬 響 Piano, Piano Arrangement T5
						松井 敬治 Vocal T5`}
				</p>
				<h2 className='text-lg font-bold pt-4 pb-2'>MASTERING</h2>
				<p>畠山地平</p>
			</div>
		</div>
	)
}

export default page