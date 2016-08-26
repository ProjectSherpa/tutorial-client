import React from 'react'
import RenderMarkdown from '../RenderMarkdown'

export default class BasecampResources extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: `
# Basecamp Resources

Scaling web projects shouldn't be difficult. We are providing a step by step tutorial on how to effectively scale projects. 

### Tech

The following tools are used to teach scalibility. 

* [React] - A javascript library for building user interfaces
* [Avalanche] - A load and performance testing tool by [@scalibilitysherpa]
* [Javascript] - the programming language of HTML and the Web
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework 
* [golang] - an open source programming language that makes it easy to build simple, reliable, and efficient software.
* [Docker] - an open platform for developers and sysadmins to build, ship, and run distributed applications
* [nginx] - high performance load balancer
* [cAdvisor] - provides a pane of glass to look at container resource usage
* [vagrant] - Create and configure lightweight, reproducible, and portable development environments.

### Services
* [AWS] - Amazon web-services 
* [DigitalOcean] - cloud deployment service

[React]: <https://facebook.github.io/react/>
[@scalibilitysherpa]: <http://scalibilitysherpa.com>
[Avalanche]: <https://github.com/ProjectSherpa>
[express]: <http://expressjs.com>
[Javascript]: <http://javascript.com>
[node.js]: <https://nodejs.org/en/>
[golang]: <https://golang.org/>
[Docker]: <https://docker.com/>
[nginx]: <https://nginx.com/>
[cAdvisor]: <https://nginx.com/>
[vagrant]: <https://vagrantup.com/>
[AWS]: <https://aws.amazon.com/>
[DigitalOcean]: <https://digitalocean.com/>`
    }
  }

  render () {
    return (
      <div className="post">
        <RenderMarkdown markdown={this.state.code} />
      </div>
    )
  }
}
