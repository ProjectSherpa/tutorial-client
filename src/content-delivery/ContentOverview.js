import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class ContentOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidURL: "x",
      screenshot: "http://bit.ly/2brah6p"
    }
  }
  
   

  render() {
    if(!session.loggedIn) {
      return(
        <LockedContent />
      )
    }
    
    return (
      <div className="post">
        <h2>Content Overview</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot}/>

      </div>
    );
  }
}