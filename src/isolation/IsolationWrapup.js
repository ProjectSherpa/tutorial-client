import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class IsolationWrapup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
   

  render() {
    if(true) {
      return(
        <LockedContent />
      )
    }
    
    return (
      <div className="post">
        <h2>Isolation Wrap Up</h2>
      </div>
    );
  }
}