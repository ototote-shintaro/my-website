import React from 'react'
import { Concert } from '../utils/types';
import ConcertCard from './ConcertCard';

type ConcertListProps = {
	concerts: Concert[];
}

const ConcertsList = ({ concerts }: ConcertListProps) => {
	return (
		<div className='mx-auto w-fit divide-y divide-gray-400'>
			{concerts.map((concert) => (
				<ConcertCard concert={concert} key={concert.id} />
			))}
		</div>
	)
}

export default ConcertsList