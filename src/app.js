import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import {Col} from 'react-bootstrap';

// Persistent Components
import ContentContainer from './ContentContainer';
import Header from './Header';
import SideBar from './SideBar';

// Getting Started Components
import Resources from './getting-started/Resources';
import Intro from './getting-started/Intro';
import Overview from './getting-started/Overview';
import CodeAlong1 from './getting-started/CodeAlong1';
import CodeAlong2 from './getting-started/CodeAlong2';
import CodeAlong3 from './getting-started/CodeAlong3';
import Wrapup from './getting-started/Wrapup';

// Vertical Scaling Components

// Isolation of Services Components

// Content Delivery Components







import SplashHeader from './SplashComponents/SplashHeader';
import SplashContent from './SplashComponents/SplashContent';
import Signup from './SplashComponents/Signup';
import Login from './SplashComponents/Login';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SplashHeader /> 
        <div className="splash-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
		    <Header /> 
        <div className="page-content">
  	      <Col xs={4} md={2} className="sidebar">
  	        <SideBar />
  	      </Col>
  	      <Col xs={8} md={10} className="content-body">
  	        <div>
  	          <ContentContainer />
  	        </div>
  	        <div className="post-body">
  	          {this.props.children}
  	        </div>
  	      </Col>
        </div>
		  </div>
    );
  }
}


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Router>
      <Route path="/" component={Splash}>
        <IndexRoute component={SplashContent}/>
      </Route>
      <Route path="/login" component={Splash}>
        <IndexRoute component={Login}/>
      </Route>
      <Route path="/signup" component={Splash}>
        <IndexRoute component={Signup}/>
      </Route>


      <Route path="/gettingstarted/resources" component={App}>
        <IndexRoute component={Resources}/>
      </Route>
      <Route path="/gettingstarted/intro" component={App}>
        <IndexRoute component={Intro}/>
      </Route>
      <Route path="/gettingstarted/overview" component={App}>
        <IndexRoute component={Overview}/>
      </Route>
      <Route path="/gettingstarted/codealong1" component={App}>
        <IndexRoute component={CodeAlong1}/>
      </Route>
      <Route path="/gettingstarted/codealong2" component={App}>
        <IndexRoute component={CodeAlong2}/>
      </Route>
      <Route path="/gettingstarted/codealong3" component={App}>
        <IndexRoute component={CodeAlong3}/>
      </Route>
      <Route path="/gettingstarted/wrapup" component={App}>
        <IndexRoute component={Wrapup}/>
      </Route>

    </Router>,
    document.getElementById('mount')
  );
});







