import React from 'react'
import RenderMarkdown from '../RenderMarkdown'

export default class BeforeStart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      code: `
Having to scale is about the best problem your app can have. It means success. Unfortunately, along with this success comes comes overloaded servers, performance degradation, and even complete server crashes or system failures. That is, if you haven't prepared. The art of scalable architecture is walking the fine line between maintaing performance under load (increased users, etc) and not over-engineering something that doesn't need it. Complex scalable architectures implemented by snapchat or ebay probably don't apply to your app. Scalability costs money and time, so there is no perfect answer. Understanding this, and preparing accordingly will save your company. Don't add complexity unless it is warranted.

## When should you think about Scaling?

As you move forward in the course, keep in mind the types of issues applications need to scale for and apply think about how each solution or idea we walk through can alleviate problems associated with such a bottleneck.
 1. CPU
 2. MEMORY
 3. DISK
 4. Bandwith

At a high level, we understand that our setup can only handle so much load. When the limit is reached, we must make decisions. This course is an exploration of the options we have when faced with such a decision. Scalability is a quality of almost every part of your application. At the end of this course, you should be able to identify potential points of failure and be able to find solutions to sustain performance. Have fun scaling!
`
    }
  }

  render () {
    return (
      <div className="post">
        <h1>A Note Before You Begin</h1>
        <RenderMarkdown markdown={this.state.code} />
      </div>
    )
  }
}
