import React from 'react';

const Blog = ({post}) => {
	let postElems = post.map((post, idx) => {
		return (
			<div>
				<h2>Post by {post.author}</h2>
				<p>Date: {post.date}</p>
				<p>Content: {post.body}</p>
			</div>
		)
	})

	return (
		<>
			<div className='content'>
				{postElems}
			</div>
		</>
	)
}

export default Blog;