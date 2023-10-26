import React from 'react'
import { headers } from "next/headers";
import { Article } from "@/app/utils/types";

export default async function Article() {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/article`
	const response = await fetch(url, {
		cache: 'no-store',
		headers: Object.fromEntries(headers())
	});
  if (!response.ok) throw new Error('Failed to fetch data')
  const users: Article[] = await response.json();

	return (
		<div>
			<ul>
      {users.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    	</ul>
		</div>
	)
}
