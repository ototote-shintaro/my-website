"use client";
import React from 'react';
import YouTube from 'react-youtube';

const page = () => {
	return (
		<div>
			<h1 className='text-title'>Video</h1>
			<div className='md:grid md:grid-cols-2 md:px-[5%]'>
				<Content videoId='QLeJ5uNi-_c' label='Kanako Fukui + Shintaro Tanaka / Improvisation Nov. 14' />
				<Content videoId='iI8b0GckrcQ' label='Shintaro Tanaka Winter Light Ensemble / Live at echo and cloud studio' />
				<Content videoId='hdodgI_VKzk' label='Shintaro Tanaka Ototote Ensemble / Live at Waseda Scott Hall' />
				<Content videoId='mhAwCow6tZE' label='Tranquility Base - Recording Session "Tranquility #2' />
				<Content videoId='cJ3XlDtmZXQ' label='静かの基地 2018/12/16 吉祥寺Lilt "Tranquility #1' />
			</div>
		</div>
	)
}

type ContentProps = {
	videoId: string,
	label: string
}
const Content = ({ videoId, label }: ContentProps) => {
	return (
		<div className='m-6'>
			<YouTube
				videoId={videoId}
				iframeClassName='aspect-video w-full h-full'
			/>
			<label className='cursor-pointer flex justify-center items-center text-center pt-2'>{label}</label>
		</div>
	)
}

export default page;
