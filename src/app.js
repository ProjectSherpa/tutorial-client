import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';
import {Col} from 'react-bootstrap';

// Persistent Components
import ContentContainer from './ContentContainer';
import Header from './Header';
import SideBar from './SideBar';

// Basecamp Components
import Welcome from './basecamp/Welcome';
import BasecampResources from './basecamp/BasecampResources';

// Getting Started Components
import Resources from './getting-started/Resources';
import Intro from './getting-started/Intro';
import Overview from './getting-started/Overview';
import CodeAlong1 from './getting-started/CodeAlong1';
import CodeAlong2 from './getting-started/CodeAlong2';
import CodeAlong3 from './getting-started/CodeAlong3';
import Wrapup from './getting-started/Wrapup';

// Vertical Scaling Components
import VerticalResources from './vertical/VerticalResources';
import VerticalOverview from './vertical/VerticalOverview';
import VerticalAction from './vertical/VerticalAction';
import VerticalWrapup from './vertical/VerticalWrapup';

// Isolation of Services Components
import IsolationResources from './isolation/IsolationResources';
import IsolationOverview from './isolation/IsolationOverview';
import IsolationScenario from './isolation/IsolationScenario';
import IsolationSolution from './isolation/IsolationSolution';
import IsolationWrapup from './isolation/IsolationWrapup';

// Content Delivery Components
import ContentResources from './content-delivery/ContentResources';
import ContentOverview from './content-delivery/ContentOverview';
import ContentScenario from './content-delivery/ContentScenario';
import ContentSolution1 from './content-delivery/ContentSolution1';
import ContentSolution2 from './content-delivery/ContentSolution2';
import ContentSolution3 from './content-delivery/ContentSolution3';
import ContentWrapup from './content-delivery/ContentWrapup';

// Conclusion (end of course) Components
import CourseWrapup from './conclusion/CourseWrapup';
import AdditionalResources from './conclusion/AdditionalResources';
import WhatsNext from './conclusion/WhatsNext';


// Appendix Components
import Vagrant1 from './appendix/Vagrant1';
import Vagrant2 from './appendix/Vagrant2';
import MySQL from './appendix/MySQL';
import Bloopers from './appendix/Bloopers';

// Public Components (refactor and move to different file)
import SplashHeader from './SplashComponents/SplashHeader';
import SplashFooter from './SplashComponents/SplashFooter';
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
        <SplashFooter />
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
  	      <Col xs={4} md={3} className="sidebar">
  	        <SideBar />
  	      </Col>
  	      <Col xs={8} md={9} className="content-body">
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

      <Route path="/basecamp/welcome" component={App}>
        <IndexRoute component={Welcome}/>
      </Route>
      <Route path="/basecamp/resources" component={App}>
        <IndexRoute component={BasecampResources}/>
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

      <Route path="/vertical/resources" component={App}>
        <IndexRoute component={VerticalResources}/>
      </Route>
      <Route path="/vertical/overview" component={App}>
        <IndexRoute component={VerticalOverview}/>
      </Route>
      <Route path="/vertical/action" component={App}>
        <IndexRoute component={VerticalAction}/>
      </Route>
      <Route path="/vertical/wrapup" component={App}>
        <IndexRoute component={VerticalWrapup}/>
      </Route>

      <Route path="/isolation/resources" component={App}>
        <IndexRoute component={IsolationResources}/>
      </Route>
      <Route path="/isolation/overview" component={App}>
        <IndexRoute component={IsolationOverview}/>
      </Route>
      <Route path="/isolation/scenario" component={App}>
        <IndexRoute component={IsolationScenario}/>
      </Route>
      <Route path="/isolation/solution" component={App}>
        <IndexRoute component={IsolationSolution}/>
      </Route>
      <Route path="/isolation/wrapup" component={App}>
        <IndexRoute component={IsolationWrapup}/>
      </Route>

      <Route path="/content/resources" component={App}>
        <IndexRoute component={ContentResources}/>
      </Route>
      <Route path="/content/overview" component={App}>
        <IndexRoute component={ContentOverview}/>
      </Route>
      <Route path="/content/scenario" component={App}>
        <IndexRoute component={ContentScenario}/>
      </Route>
      <Route path="/content/solution1" component={App}>
        <IndexRoute component={ContentSolution1}/>
      </Route>
      <Route path="/content/solution2" component={App}>
        <IndexRoute component={ContentSolution2}/>
      </Route>
      <Route path="/content/solution3" component={App}>
        <IndexRoute component={ContentSolution3}/>
      </Route>
      <Route path="/content/wrapup" component={App}>
        <IndexRoute component={ContentWrapup}/>
      </Route>

      <Route path="/conclusion/wrapup" component={App}>
        <IndexRoute component={CourseWrapup}/>
      </Route>
      <Route path="/conclusion/resources" component={App}>
        <IndexRoute component={AdditionalResources}/>
      </Route>
      <Route path="/conclusion/whatsnext" component={App}>
        <IndexRoute component={WhatsNext}/>
      </Route>

      <Route path="/appendix/mysql" component={App}>
        <IndexRoute component={MySQL}/>
      </Route>
      <Route path="/appendix/vagrant1" component={App}>
        <IndexRoute component={Vagrant1}/>
      </Route>
      <Route path="/appendix/vagrant2" component={App}>
        <IndexRoute component={Vagrant2}/>
      </Route>
      <Route path="/appendix/bloopers" component={App}>
        <IndexRoute component={Bloopers}/>
      </Route>

    </Router>,
    document.getElementById('mount')
  );
});







