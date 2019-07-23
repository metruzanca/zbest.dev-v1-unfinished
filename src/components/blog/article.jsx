import React from 'react';

const Article = ({key, title, body, tags }) =>{
	return(
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
			<h5>{tags}</h5>
		</div>
	)
}

export default Article;