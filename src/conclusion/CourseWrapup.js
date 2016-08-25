import React from 'react'
import LockedContent from '../LockedContent'

export default class CourseWrapup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    if (true) {
      return (
        <LockedContent />
      )
    }

    return (
      <div className="post">
        <h2>Course Wrap Up</h2>
      </div>
    )
  }
}
