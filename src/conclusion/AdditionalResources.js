import React from 'react'
import LockedContent from '../LockedContent'

export default class AdditionalResources extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    //todo: Hardcoded for now, need to add logic
    if (true) {
      return (
        <LockedContent />
      )
    }

    return (
      <div className="post">
        <h2>Additional Resources</h2>
      </div>
    )
  }
}
