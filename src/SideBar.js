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
      <div className="sidebar-container">
      	<ButtonGroup className="scroll" vertical block>
    
          <Button>
            <span>Scalability Course Progress</span>
            <ProgressBar  bsStyle="success" now={22} label={`${22}%`} />
          </Button>

          <Panel collapsible defaultExpanded header="Basecamp" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/basecamp/welcome">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Welcome</Button>
              </Link>
              <Link to="/basecamp/resources">
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
              <Link to="/vertical/resources">
                <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Resources(vagrant videos)</Button>
              </Link>
              <Link to="/vertical/overview">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/vertical/action">
                <Button className="button-left"><FontAwesome name="gamepad" className="indent" />   Action</Button>
              </Link>
              <Link to="/vertical/wrapup">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Isolation of Services" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/isolation/resources">
                <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Resources(+docker videos)</Button>
              </Link>
              <Link to="/isolation/overview">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/isolation/scenario">
                <Button className="button-left"><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/isolation/solution">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Code Solution</Button>
              </Link>
              <Link to="/isolation/wrapup">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>


          <Panel collapsible defaultExpanded header="Optimizing Content Delivery" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/content/resources">
                <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Resources</Button>
              </Link>
              <Link to="/content/overview">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/content/scenario">
                <Button className="button-left"><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/content/solution1">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   S3 + Display</Button>
              </Link>
              <Link to="/content/solution2">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   S3 + Cloudfront</Button>
              </Link>
              <Link to="/content/wrapup">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Course Conclusion" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/conclusion/wrapup">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
              <Link to="/conclusion/resources">
                <Button className="button-left"><FontAwesome name="file-text" className="indent" />   Keep Learning</Button>
              </Link>
              <Link to="/conclusion/whatsnext">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   What's Next?</Button>
              </Link>
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Appendix" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/appendix/mysql">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   MySQL Refresher</Button>
              </Link>
              <Link to="/appendix/vagrant1">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Vagrant, Part 1</Button>
              </Link>
              <Link to="/appendix/vagrant2">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Vagrant, Part 2</Button>
              </Link>
              <Link to="/appendix/bloopers">
                <Button className="button-left"><FontAwesome name="video-camera" className="indent" />   Bloopers</Button>
              </Link>
            </ButtonGroup>
          </Panel>

    	  </ButtonGroup>
      </div>
    )
  }
}
