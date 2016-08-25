import React from 'react'
import Video from '../Video'
import LockedContent from '../LockedContent'


var session = require('../../www/assets.js')

export default class Welcome extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      vidURL: 'https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/00+-+intro/00+-+IntroToScalability4k.mp4',
      screenshot: 'https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/00+-+intro/00-intro.png'
    }
  }


  render () {
    if (!session.loggedIn) {
      return (
        <LockedContent />
      )
    }

    return (
      <div className="post">
        <h2>Welcome to the Course</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot}/>
      </div>
    );
  }
}