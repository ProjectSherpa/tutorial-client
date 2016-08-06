import React from 'react';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button, LinkContainer} from 'react-bootstrap';

class Header extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }

  render() {
    
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">My Blog</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="!Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>!Action</MenuItem>
              <MenuItem eventKey={3.2}>!Another action</MenuItem>
              <MenuItem eventKey={3.3}>!Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Button bsStyle="primary">
                !Login
              </Button>
            </NavItem>
            <NavItem eventKey={1} href="#">
              <Button bsStyle="primary">
                !Signup
              </Button>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;