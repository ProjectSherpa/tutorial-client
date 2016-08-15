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
              <a href="#"><h4>Logo/Home</h4></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Nav>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>
                <h4>Curriculum</h4>
              </NavItem>
              <NavItem>
                <h4>Pricing</h4>
              </NavItem>
              <NavItem>
                <h4>Reviews</h4>
              </NavItem>
              <NavItem>
                <Link to="/login"><Button>Sign In</Button></Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}






