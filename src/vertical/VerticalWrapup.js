import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

export default class VerticalWrapup extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	vidURL: "x",
      screenshot: "https://avatars1.githubusercontent.com/u/20851055?v=3&s=200"
    }
  }
  
   

  render() {
    if (!this.state.vidURL) {
      return "Loading...";
    }
  	
    return (
      <div className="post">
        <h2>Vertical Scaling Wrap Up</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot}/>
        <h3></h3>
      </div>
    );
  }
}
