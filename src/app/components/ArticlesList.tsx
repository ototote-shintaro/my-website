import React from 'react'
import { Article } from '../utils/types'
import ArticleCard from './ArticleCard'

type ArticlesListProps = {
	articles: Article[]
}

const ArticlesList = ({articles}: ArticlesListProps) => {
	return (
		<div className='md:grid md:grid-cols-3 md:mx-[10%]'>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
		</div>
	)
}

export default ArticlesList