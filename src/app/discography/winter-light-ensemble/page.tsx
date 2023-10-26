import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<div>
			<title>Eternity and a Day</title>
			<h1 className='text-title'>永​遠​と​一​日 / Eternity and a Day</h1>
			<Image
				className='m-auto md:max-w-lx md:max-h-lx'
				src='https://noliqyucceyolxirrwij.supabase.co/storage/v1/object/public/website-images/src/wle-jacket-2.jpg'
				alt='wle-jacket-2'
				width={756}
				height={210}
			/>
			<div className='text-center whitespace-pre-line mx-4 md:mx-[25%]'>
				<div className='flex justify-center items-center pt-4'>
					<iframe
						className='w-[700px] h-32'
						src='https://bandcamp.com/EmbeddedPlayer/album=1098915542/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/'
						seamless
					/>
				</div>
				<Link
					href='https://shintaro-tanaka.bandcamp.com/album/eternity-and-a-day'
					className='hover:opacity-75 text-sm text-blue-500'
				>
					<p>https://shintaro-tanaka.bandcamp.com/album/eternity-and-a-day</p>
				</Link>
				<p className='pt-4'>CDのご購入はこちらから</p>
				<Link
					href='https://ototote.official.ec/items/67788125'
					className='hover:opacity-75 text-blue-500'
					target='_blank'
				>
					<p>https://ototote.official.ec/items/67788125</p>
				</Link>
					
				<p className='my-6'>
					田中慎太郎率いるwinter light ensembleのファーストアルバム。コロナ禍における2度の無観客ライブの収録を経て、卓越したミュージシャンによるサポートの元、全9曲、37分で綴る四季の彩りと巡り。
				</p>
				<p className='my-4'>
					{`Winter Light Ensemble
						松岡 麻衣子 (バイオリン)
						甲斐 史子 (ヴィオラ)
						松本 卓以 (チェロ)
						ふくいかな子 (ピアノ)
						石川 高 (笙)
						岩瀬 龍太(クラリネット)
						田中 慎太郎 (ギター)`}
				</p>
				<p className='my-4'>
					{`作曲・ミックス
						田中 慎太郎`}
				</p>
				<p className='my-4'>
					{`録音・マスタリング
						福岡 功訓 (Flysound Co.)`}
				</p>
				<p className='my-4'>
					{`録音会場
						安養院`}
				</p>
				<p className='my-4'>
					{`ギターダビング
						松井 敬治 (echo and cloud studio)`}
				</p>
				<p className='my-4'>
					{`イラスト・デザイン
						小川哲`}
				</p>
				<p className='my-4'>
					{`released September 21, 2022`}
				</p>
			</div>
		</div>
	)
}

export default page
