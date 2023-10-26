import React from 'react'
import ConcertsList from '../components/ConcertsList';
import { headers } from 'next/headers';


const page = async () => {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/concert`
  const res = await fetch(url, {
		cache: "no-store",
		headers: Object.fromEntries(headers())
	});
  const concerts = await res.json();

	return (
		<div>
			<title>Concert</title>
			<h1 className='text-title'>Concert</h1>
			<div className='mx-4'>
				<ConcertsList concerts={concerts} />
			</div>
		</div>
	)
}

export default page;
