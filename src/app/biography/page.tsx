import React from 'react'
import Image from 'next/image'

const page = () => {
	return (
		<div>
			<title>Biography</title>
			<h1 className='text-title'>Biography</h1>
			<Image className='m-auto py-4 md:max-w-5xl md:max-h-5xl'
				src='/profile.jpg'
				alt=''
				width={1080}
				height={300}
			/>
			{textPC()}
			{textSP()}
		</div>
	)
}

const textPC = () => {
	return (
		<div className='hidden md:inline'>
			<div className='flex mx-[20%]'>
				<div className='flex-1 p-2'>
					<p className='mb-2'>JP</p>
					{profileJp()}
				</div>
				<div className='w-0.5 bg-slate-300 mx-2' />
				<div className='flex-1 ml-2 p-2'>
					<p className='mb-2'>EN</p>
					{profileEn()}
				</div>
			</div>
		</div>
	)
}

const textSP = () => {
	return (
		<div className='md:hidden mx-6 my-4'>
			<div className='pb-6'>
				{profileJp()}
			</div>
			<div>
				{profileEn()}
			</div>
		</div>
	)
}

const profileJp = () => {
	return (
		<p>
			{`田中慎太郎  1988年9月、東京生まれ。作曲を一ノ瀬響に師事。音の肌触り・静けさをテーマに、ギターによる即興演奏やコンサートピースの作曲、映像作品への楽曲提供など多様な形式での活動を展開。近年はピアノと弦楽器、笙を中心とした室内楽アンサンブル "winter light ensemble"を率いて活動し、2022年にアルバム「永遠と一日」を発表。満月カルテットやUN（あん）といったグループでも演奏や創作活動を行っている。`}
		</p>
	)
}

const profileEn = () => {
	return (
		<p>
			{`Shintaro Tanaka - Born in September 1988 in Tokyo. He studied composition under Kyo Ichinose and focuses on themes of tranquility. He's active across various genres, engaging in activities such as improvisational guitar performances, composing concert pieces, and providing music for visual projects. In recent years, he has been leading the chamber music ensemble "winter light ensemble," centered around piano, strings, and sho. The "winter light ensemble" released the album "Eternity and a Day" in 2022. He's involved in performing and creative endeavors with groups like the Full Moon Quartet and UN.`}
		</p>
	)
}

export default page
