import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button, LinkContainer} from 'react-bootstrap';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');


export default class SplashHeader extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {

    return (
      <Navbar className="navbar-fixed-bottom">
        <Nav pullLeft>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Nav>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>
                Contact Us
              </NavItem>
               <NavItem>
               Forums
              </NavItem>
              <NavItem className="footer-icon">
                <a href="https://twitter.com/scalingsherpa"><FontAwesome name="twitter"/></a>
              </NavItem>



              <NavItem className="footer-icon">
                <a href="https://www.youtube.com/channel/UCbR1cFgEvnlj52E6YkQLhRQ"><FontAwesome name="youtube-play"/></a>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}
