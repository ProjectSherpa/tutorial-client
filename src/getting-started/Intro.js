import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidURL: "x",
      screenshot: "http://bit.ly/2brah6p"
    }
  }
  
   

  render() {
    if (!this.state.vidURL) {
      return "Loading...";
    }

    if(true) {
      return(
        <LockedContent />
      )
    }
    
    return (
      <div className="post">
        <h2>Overview of This Module</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot}/>
      </div>
    );
  }
}