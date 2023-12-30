import React from 'react';
import YoutubeContent from '../components/YoutubeContent';

const page = () => {
	return (
		<div>
			<title>Video</title>
			<h1 className='text-title'>Video</h1>
			<div className='md:grid md:grid-cols-2 md:px-[5%]'>
				<YoutubeContent videoId='RkLXqxXuTNg' label='Shintaro Tanaka: Tracing the Veins / 田中慎太郎: 水理をたどって' />
				<YoutubeContent videoId='h8uDkVQRhGY' label='Shintaro Tanaka: yatsure buro / 田中慎太郎: 窶風炉' />
				<YoutubeContent videoId='QLeJ5uNi-_c' label='Kanako Fukui + Shintaro Tanaka / Improvisation Nov. 14' />
				<YoutubeContent videoId='iI8b0GckrcQ' label='Shintaro Tanaka Winter Light Ensemble / Live at echo and cloud studio' />
				<YoutubeContent videoId='hdodgI_VKzk' label='Shintaro Tanaka Ototote Ensemble / Live at Waseda Scott Hall' />
				<YoutubeContent videoId='mhAwCow6tZE' label='Tranquility Base - Recording Session "Tranquility #2' />
				<YoutubeContent videoId='cJ3XlDtmZXQ' label='静かの基地 2018/12/16 吉祥寺Lilt "Tranquility #1' />
			</div>
		</div>
	)
}

export default page;
