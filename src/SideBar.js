import React, { PropTypes } from 'react'
import {ButtonGroup, Button, DropdownButton, MenuItem, ProgressBar, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

export default class SideBar extends React.Component {
  
  constructor() {
    super();
    this.state = {
      introduction: true,
      vertical: true,
      isolation: true,
      content: true,
      horizontal: true,
      additional: true
    };
  }
  
  render() {
    return (
      	<ButtonGroup className="scroll" vertical block>
    
          <Button>
            <span>Scalability Course Progress</span>
            <ProgressBar  bsStyle="success" now={5} label={`${5}%`} />
          </Button>

          <Panel collapsible defaultExpanded header="Basecamp" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Welcome</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="file-text" className="indent"/>   Intro Resources</Button>
              </Link> 
      
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Getting Started" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/gettingstarted/resources">
                <Button className="button-left"><FontAwesome name="file-text" className="indent"/>   Resources</Button>
              </Link>
              <Link to="/gettingstarted/intro">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Module Intro (together?)</Button>
              </Link>
              <Link to="/gettingstarted/overview">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Single Server Architecture</Button>
              </Link> 
              <Link to="/gettingstarted/codealong1">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Code Along 1</Button>
              </Link>
              <Link to="/gettingstarted/codealong2">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Code Along 2</Button>
              </Link>
              <Link to="/gettingstarted/codealong3">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Code Along 3</Button>
              </Link>
              <Link to="/gettingstarted/wrapup">
                <Button className="button-left"><FontAwesome name="file-text" className="indent"/>   Wrap up</Button>
              </Link>   
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Scaling Vertically" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/">
                <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Resources(vagrant videos)</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Solution</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>
          <Panel collapsible defaultExpanded header="Isolation of Services" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/">
                <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Resources(+docker videos)</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Code Solution</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>
          <Panel collapsible defaultExpanded header="Optimizing Content Delivery" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/">
                <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Resources</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   S3 + Display</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   S3 + Cloudfront</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   P2P</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>
          <Panel collapsible defaultExpanded header="Fundamentals Recap" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/">
                <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Additional Resources</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>
          <Panel collapsible defaultExpanded header="Horizontal Scaling" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Resources</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   HorizVideo</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   HorizVideo</Button>
              </Link>
              <Link to="/">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>
          <Panel collapsible defaultExpanded header="Deep Dives" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   MySQL</Button>
              <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Resources</Button>
              <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   More Content</Button>
              <Button className="button-left"><FontAwesome name="file-text" className="indent" />   nginx</Button>
            </ButtonGroup>
          </Panel>
    	    <Button><Link to="/introduction">Introduction</Link></Button>
    	    <Button><Link to="/vocab">Scalability Vocab</Link></Button>
          <Button><Link to="/day1">Day 1</Link></Button>
          <Button><Link to="/day2">Day 2</Link></Button>
    	  </ButtonGroup>
    )
  }
}
