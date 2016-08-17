import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class VerticalResources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
Vertical scaling: buy more power! Upgrade the current machine! Basically, get your hands on more memory, a faster server, etc. This could mean physically buying a new machine if you are running your own hardware setup, or it could mean upgrading your instance in the cloud. 

> insert
>(diagram of small server upgraded to bigger server --simple)
>

Keep in mind the limiting factors as you work through these exercises. Your buying power decreases drastically as you get beefier and beefier machines: see diagram below of costs. In some situations, the incremental cost is not that big, and the ease of upgrading is justified many times over by the savings in developer time. However, you are limited by $ and by physical limits of today's hardware.

>
> Insert graph of $ vs additional power (incrementally more expensive)
>

We've included links to some appendix material for getting up to speed with Vagrant, a valuable tool to have in your arsenal for easily creating virtual machines. Work through these videos to learn Vagrant and see a basic example of vertical scaling. 

* [Getting Started with Vagrant, part 1](/#/appendix/vagrant1)
* [Getting Started with Vagrant, part 2](/#appendix/vagrant2)

Now, head over to the next video to dive into some code and see vertical scaling in action!
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
        <h2>An Introduction to Vertical Scaling</h2>
        <RenderMarkdown markdown={this.state.markdown} />
      </div>
    );
  }
}