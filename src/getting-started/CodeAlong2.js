import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class CodeAlong2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidURL: "https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/01-Single+Server+Setup+/01-2+-+Display+Images.mp4",
      screenshot: "https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/01-Single+Server+Setup+/01-2-display-images.png"
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
        <h2>Code Along: Part 2</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot}/>
      </div>
    );
  }
}