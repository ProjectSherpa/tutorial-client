import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class CourseWrapup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <h2>Course Wrap Up</h2>
      </div>
    );
  }
}