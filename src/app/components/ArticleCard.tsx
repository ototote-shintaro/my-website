import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Article } from '../utils/types'

type ArticleCardProps = {
	article: Article
};

const ArticleCard = ({ article }: ArticleCardProps) => {
	return (
		<div>
			<article className='my-4 md:px-12'>
				<Link href={`article/${article.id}`} className='hover:opacity-75'>
					<Image
						src={article.imageUrl}
						alt=''
						className='mx-auto max-w-xs md:max-h-xs'
						width={700}
						height={700}
					/>
				</Link>
				<div className='text-center p-4'>
					<Link href={`article/${article.id}`}>{article.title}</Link>
					<p className='text-sm pb-3 text-slate-900'>
						{new Date(article.createdAt).toLocaleDateString('ja-JP')}
					</p>
				</div>
			</article>
		</div>
	)
}

export default ArticleCard
