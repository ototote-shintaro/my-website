import { Article } from '@/app/utils/types'
import { headers } from 'next/headers'
import Image from 'next/image'
import React from 'react'

const Article = async ({ params }: { params: {id: string} }) => {
	const url = `${process.env.NEXT_PUBLIC_API_URL}/api/article/${params.id}`
	console.log(url);
  const res = await fetch(url, {
			next: {
				revalidate: 10,
			},
			headers: Object.fromEntries(headers())
		});
		console.log(res)
	if (!res.ok) throw new Error('Failed to fetch data')
  const detailArticle: Article = await res.json()

	return (
		<div className='max-w-3xl mx-auto p-5'>
			<Image className='m-auto py-4 md:max-w-md md:max-h-md'
				src={detailArticle.imageUrl}
				alt='image'
				width={700}
				height={700}
			/>
			<h1 className='text-xl text-center my-10'>{detailArticle.title}</h1>
			<div className='leading-relaxed text-justify mb-10'>
				<p>{parseTextWithLinks(detailArticle.content)}</p>
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

function parseTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
          {part}
        </a>
      );
    }
    return replaceLineBreaks(part);
  });
}

export default Article
