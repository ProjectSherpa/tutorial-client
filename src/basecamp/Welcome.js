import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    
    return (
      <div className="post">
        <h2>Basecamp Welcome</h2>
      </div>
    );
  }
}