import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

export default class CodeAlong2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vidURL: "https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/01-Single+Server+Setup+/01-2+-+Display+Images.mp4",
      screenshot: "https://avatars1.githubusercontent.com/u/20851055?v=3&s=200"
    }
  }
  
   

  render() {
    if (!this.state.vidURL) {
      return "Loading...";
    }
    
    return (
      <div className="post">
        <h2>Code Along: Part 2</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot}/>
      </div>
    );
  }
}