import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

export default class BasecampResources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    
    return (
      <div className="post">
        <h2>Basecamp Resources</h2>
      </div>
    );
  }
}