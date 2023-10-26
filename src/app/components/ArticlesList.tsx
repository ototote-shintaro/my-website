import React from 'react'
import { Article } from '../utils/types'

type ArticlesListProps = {
	articles: Article[]
}

const ArticlesList = ({articles}: ArticlesListProps) => {
	return (
		<div>
			<ul>
      {articles.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    	</ul>
		</div>
	)
}

export default ArticlesList