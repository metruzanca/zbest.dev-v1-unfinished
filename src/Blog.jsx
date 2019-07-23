import React from 'react';
import NavBar from './components/navbar/navbar';
import Bar from './components/bar';
import Footer from './components/footer';
import Feed from './components/blog/feed';


class Blog extends React.Component {
	constructor(){
		super();
		this.state = {
			posts: []
		}
	}

	componentDidMount(){
		fetch('/api/portfolio')
		.then(res => res.json())
		.then(posts => {
			this.setState({posts})
		})
	}

	render(){
		return (
			<>
      	<NavBar page="nav-blog"/>
      	<Bar/>
      	<h1>My garbage blog</h1>
      	<Feed posts={this.state.posts}/>
      	<Footer/>
			</>
		)
	}
	
}

export default Blog;