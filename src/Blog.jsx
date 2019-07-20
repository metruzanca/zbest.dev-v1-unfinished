import React from 'react';
import NavBar from './components/navbar/navbar';
import Bar from './components/bar';
import Footer from './components/footer';
import Feed from './components/blog/feed';

const Blog = () =>{
	return (
		<>
        	<NavBar page="nav-blog"/>
        	<Bar/>
			Hello there!
        	<Feed/>
        	<Footer/>
		</>
	)
}

export default Blog;