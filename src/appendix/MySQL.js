import React from 'react'
import Video from '../Video'
import LockedContent from '../LockedContent'
var session = require('../../www/assets.js')

export default class MySQL extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      vidURL: 'https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/01-Single+Server+Setup+/01-4+-+SQL+Joins.mp4',
      screenshot: 'https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/06+-+Appendix/mysql-refresher.png'
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
        <h2>MySQL Refresher</h2>
        <Video className="wide" video={this.state.vidURL} screenshot={this.state.screenshot} />
        <h3></h3>
      </div>
    )
  }
}

