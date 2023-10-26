import React from 'react'
import { headers } from "next/headers";
import { Article } from "@/app/utils/types";
import ArticlesList from '../components/ArticlesList';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default async function Article() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/article`
	const res = await fetch(url, {
		cache: 'no-store',
		headers: Object.fromEntries(headers())
	});
  if (!res.ok) throw new Error('Failed to fetch data')
  const articles: Article[] = await res.json()

	return (
		<div>
			<title>News</title>
			<h1 className='text-title'>News</h1>
			<ArticlesList articles={articles}/>
			<Link
				href={'article/all'}
				className='flex justify-center items-center border-blue-300 border-4 bg-blue-100 rounded-lg py-2 px-6 mx-auto w-fit mb-6'
			>
				<label className='text-sm font-bold cursor-pointer'>Show All News</label>
				<FontAwesomeIcon
					icon={faRightToBracket}
					className='ml-2 pt-1'
				/>
			</Link>
		</div>
	)
}
