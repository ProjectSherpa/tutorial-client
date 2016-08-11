import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

import ContentContainer from './ContentContainer';
import {Col} from 'react-bootstrap';

import Header from './Header';
import SideBar from './SideBar';


import Introduction from './Introduction';
import Vocab from './Vocab';
import Day1 from './Day1';
import Day2 from './Day2';

import SplashHeader from './SplashComponents/SplashHeader';
import SplashContent from './SplashComponents/SplashContent';
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

      <Route path="/introduction" component={App}>
        <IndexRoute component={Introduction}/>
      </Route>
      <Route path="/vocab" component={App}>
        <IndexRoute component={Vocab}/>
      </Route>
      <Route path="/day1" component={App}>
        <IndexRoute component={Day1}/>
      </Route>
      <Route path="/day2" component={App}>
        <IndexRoute component={Day2}/>
      </Route>
    </Router>,
    document.getElementById('mount')
  );
});







