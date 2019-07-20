import React from 'react';
import Landing from './landing.jsx';
import Blog from './blog.jsx';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nav: 'nav-home',
    };
  }

  render(){
    return (
      <Router>
      <Route exact path="/" component={() =>(<Landing page={this.state.nav}/>)} />
      <Route exact path="/blog" component={Blog} />
      </Router>
    );
  }

}

export default App;