import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button, LinkContainer} from 'react-bootstrap';
import {Link} from 'react-router';

export default class SplashHeader extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <Navbar>
        <Nav pullLeft>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><h4>Scalability Sherpa</h4></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Nav>
          <Navbar.Collapse>
            <Nav pullRight>
              <li>
                <a href="http://www.avalanche.scalabilitysherpa.com"><h4>Avalanche.io</h4></a>
              </li>
              <li>
                <a href="http://www.blog.scalabilitysherpa.com"><h4>Forums</h4></a>
              </li>
              <li>
                <Link to="/login"><Button bsStyle="success">Explore the Curriculum</Button></Link>
              </li>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}






