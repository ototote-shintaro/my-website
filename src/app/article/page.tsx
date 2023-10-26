import React from 'react'
import { headers } from "next/headers";
import { Article } from "@/app/utils/types";
import ArticlesList from '../components/ArticlesList';

export default async function Article() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/article`
	const res = await fetch(url, {
		cache: 'no-store',
		headers: Object.fromEntries(headers())
	});
  if (!res.ok) throw new Error('Failed to fetch data')
  const articles: Article[] = await res.json();

	return (
		<div>
			<ArticlesList articles={articles}/>
			{/* <ul>
      {users.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    	</ul> */}
		</div>
	)
}
