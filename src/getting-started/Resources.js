import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
### This Module
In this module, we'll build a simple single server app using Node, Express and MySQL. As you build this app, and as you build apps in the future, think about the pros and cons of your current system architecture. There are always reasons for and against any given setup. Even in the simple app you will build now, there is a big positive: simplicity! A simple architecture will have you up and running in no time, and won't create bottlenecks in the development process. Finding the right balance between a robust setup and one that isn't over-engineered for your use case is key.

We'll outline a few simple architectures for you below to get you thinking. Keep these in the back of your mind as we move forward.

### 1. Single Server
Here, we put all the pieces onto one machine, or server. Building an app like this might make sense for prototyping, hackathons, or other times where scalability isn't a concern.

![MacDown logo](https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/01-Single+Server+Setup+/singleserver.png)

**Positives:**
- Speed in setting up!
 
**Possible drawbacks:**
- No room to scale. Both your application and your database will be using the same resources, so it may be difficult to identify where performance degradation is coming from.

### 2. Give Your Database its Own Machine
By putting your database on it's own server, we gain some added security benefits and separation of concerns while adding only minimal complexity to our system design.

![MacDown logo](https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/01-Single+Server+Setup+/separateDBserver.png)


**Positives:**
- Still speedy to set up!
- Now have the ability to scale each server individually, allocating money/time/resources to the server that needs it.
- Possible security benefits from isolating your DB carrying sensitive data.

**Possible drawbacks:**
- Must make sure to monitor communication times between servers.


### 3. Adding a Load Balancer
Here, we'll add a machine dedicated to one task: distributing work between other servers. Ideally, the load balancer prevents other servers from getting overloaded with work. There are many implementations of load balancers. Adding a load balancer is a logical first step in horizontal scaling.

![MacDown logo](https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/01-Single+Server+Setup+/loadbalancer.png)


**Positives:**
- Add many servers for the load balancer to distribute work to.
- Protection from certain traffic overload situations or DDOS attacks.

**Possible drawbacks:**
- If your load balancer goes down, your entire app will fail if you don't have contingencies in place.
- Introduces difficulties when you need to keep track of user sessions. What server does the load balancer send a returning user to? How can we be sure that the server has a given user's session information stored? 
- Must now spend time planning how the load balancer will distribute work (there are quite a few options!).

### Time to Get Started
In the getting started module, you'll be sticking with a single server setup, but if you begin to think of each of the (client, database, etc) as pieces of an architecture that you have the power to change, you'll be well served for the modules to come that deal explicitly with scaling your app.
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
        <h2>Introduction to Basic System Architecture</h2>
        <RenderMarkdown markdown={this.state.markdown} />
      </div>
    );
  }
}