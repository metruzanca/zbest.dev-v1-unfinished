import React from 'react';
import Article from './article';

const Feed = ({posts}) =>{
	return(
		<div>
			{posts.map(post => (
				<Article key={post.id} body={post.body} title={post.title} tags={post.tags}/>
				))}
		</div>
	)
}

export default Feed;