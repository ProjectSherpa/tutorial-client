import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class VerticalAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidURL: "https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/02-+Vertical+Scaling/02-04+-+Vertical+Scaling+in+Action.mp4",
      screenshot: "https://avatars1.githubusercontent.com/u/20851055?v=3&s=200"
    }
  }
  
   

  render() {
    if (!this.state.vidURL) {
      return "Loading...";
    }

    if(!session.loggedIn) {
      return(
        <LockedContent />
      )
    }
    
    return (
      <div className="post">
        <h2>Vertical Scaling In Action</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot}/>
        <h3></h3>
      </div>
    );
  }
}