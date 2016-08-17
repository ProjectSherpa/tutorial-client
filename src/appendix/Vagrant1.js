import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class Vagrant1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidURL: "https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/02-+Vertical+Scaling/02-01+-+Vagrant+Setup+Part+1.mp4",
      screenshot: "https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/06+-+Appendix/vagrant1.png"
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
        <h2>Working with Vagrant, Part 1</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot}/>
        <RenderMarkdown markdown={`### [Back to Vertical Scaling](/#/vertical/resources)`} />
      </div>
    );
  }
}