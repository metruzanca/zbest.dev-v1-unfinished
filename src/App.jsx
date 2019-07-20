import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Landing from './landing.jsx';
import Blog from './Blog.jsx';
import ErrorCode from './ErrorCode.jsx';

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
        <Switch>
          <Route exact path="/" component={() =>(<Landing page={this.state.nav}/>)} />
          <Route exact path="/blog" component={Blog} />
          <Route component={() =>(<ErrorCode code="404" message="Page Not Found."/>)} />
        </Switch>
      </Router>
    );
  }

}

export default App;