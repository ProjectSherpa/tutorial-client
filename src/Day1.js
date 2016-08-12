import React, { PropTypes } from 'react';

import Video from './Video';
import RenderMarkdown from './RenderMarkdown';

export default class Day1 extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	vidURL: "https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/vagrantpart1264.mp4"
    }
  }
  
   

  render() {
    if (!this.state.vidURL) {
      return "Loading...";
    }
  	
    return (
      
      <div className="post">
        
        <h2>DAY 1: Virtual Machines Made Easy</h2>

        <h3>Introduction</h3>
        <br/>
        <Video video={this.state.vidURL}/>



      </div>
    );
  }
}
