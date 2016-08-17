import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class IsolationResources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
### Separating concerns

Split your monolithic web application into a set of distinct functional parts and host them independently.

### Current Setup
A service which currently hasn't been isolated may look like the following. 

1. Tightly coupled
2. Hard to scale
3. All or nothing approach. 

![MacDown logo](https://s3-us-west-1.amazonaws.com/scalibilitysherpa/singleserver.png)

### Possible Solution

1. Loosly coupled
2. Easier to scale
3. More moving parts

![MacDown logo](https://s3-us-west-1.amazonaws.com/scalibilitysherpa/microservice.png)

### Another possible solution
Now that you have isolated the services we can add services from dedicated providers such as AWS. 
![MacDown logo](https://s3-us-west-1.amazonaws.com/scalibilitysherpa/awsmicro.png)

## AWS solutions
![MacDown logo](https://s3-us-west-1.amazonaws.com/scalibilitysherpa/awsServices.png)
`
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
        <h1>Introduction to Isolation of Services</h1>
        <RenderMarkdown markdown={this.state.markdown}/>
      </div>
    );
  }
}