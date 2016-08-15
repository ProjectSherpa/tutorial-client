import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

export default class Wrapup extends React.Component {
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
        <h2>Module Wrapup</h2>
      </div>
    );
  }
}