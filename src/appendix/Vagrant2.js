import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class Vagrant2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidURL: "https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/02-+Vertical+Scaling/02-03+Vagrant+Setup+Part+2.mp4",
      screenshot: "https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/06+-+Appendix/vagrant2.png"
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
        <h2>Working with Vagrant, Part 2</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot}/>
        <RenderMarkdown markdown={`### [Back to Vertical Scaling](/#/vertical/resources)`} />
      </div>
    );
  }
}