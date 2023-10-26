import React from 'react';
import { Concert } from '../utils/types';

type ConcertCardProps = {
	concert: Concert;
}

const ConcertCard = ({ concert }: ConcertCardProps) => {
	return (
		<div className='py-4'>
			<h1 className='font-bold py-2'>
				{concert.title}
			</h1>
			<div className='text-sm'>
				<p>
					日付: {new Date(concert.date).toLocaleDateString('ja-JP')}
				</p>
				<p>
					開場: {new Date(`1970-01-01T${concert.open}Z`).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
				</p>
				<p>
					開演: {new Date(`1970-01-01T${concert.start}Z`).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
				</p>
				<p>
					会場: {concert.venue}
				</p>
				<p>
					料金: {concert.price}
				</p>
				<p className='py-4'>
					{replaceLineBreaks(concert.memo)}
				</p>
			</div>
		</div>
	)
}

function replaceLineBreaks(text: string) {
	return text.split('\n').map((line, index) => (
		<span key={index}>
			{line}
			<br />
		</span>
	));
}

export default ConcertCard;
