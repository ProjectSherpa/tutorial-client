import React from 'react'
import LockedContent from '../LockedContent'

export default class WhatsNext extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  
   
  render() {
    //todo: hardcoded logic need fix
    if (true) {
      return (
        <LockedContent />
      )
    }
    
    return (
      <div className="post">
        <h2>What's Next?</h2>
      </div>
    );
  }
}
