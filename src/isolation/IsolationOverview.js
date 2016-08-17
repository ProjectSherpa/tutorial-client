import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class IsolationOverview extends React.Component {
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
        <h2>Isolation Overview</h2>
      </div>
    );
  }
}