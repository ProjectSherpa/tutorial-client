import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';
import LockedContent from '../LockedContent';
export default class Bloopers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
   

  render() {
    
    return (
      <div className="post">
        <h2>Bloopers</h2>
        <LockedContent />
      </div>
    );
  }
}