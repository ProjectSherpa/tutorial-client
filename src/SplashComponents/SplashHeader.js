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
              <NavItem>
                <Link to="/login"><Button bsStyle="success">Explore the Curriculum</Button></Link>

              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}






