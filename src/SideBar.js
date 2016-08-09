import React, { PropTypes } from 'react'
import {ButtonGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';

export default function SideBar (props) {
  return (
    	<ButtonGroup vertical block>
  	    <Button><Link to="/introduction">Introduction</Link></Button>
  	    <Button><Link to="/vocab">Scalability Vocab</Link></Button>
        <Button><Link to="/day1">Day 1</Link></Button>
        <Button><Link to="/day2">Day 2</Link></Button>
  	    <Button>SherpaTime</Button>
  	    <Button>SherpCentral</Button>
        <Button>SherpaBros</Button>
        <DropdownButton title="Basecamp" id="bg-vertical-dropdown-1">
          <MenuItem eventKey="1">Setup</MenuItem>
          <MenuItem eventKey="2">Basic Optimizations</MenuItem>
        </DropdownButton>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>
        <Button>Lesson</Button>

  	  </ButtonGroup>
  )
}
<Link to="/">Home</Link>