import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button, LinkContainer} from 'react-bootstrap';

class Header extends React.Component {
  
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
              <a href="#">Logo/Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Nav>
          <Navbar.Collapse>
            <Nav pullRight>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;