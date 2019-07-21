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
			// this.setState({posts})
			console.log(posts);
		})
	}

	render(){
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
	
}

export default Blog;