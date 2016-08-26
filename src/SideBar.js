import React, { PropTypes } from 'react'
import {ButtonGroup, Button, DropdownButton, MenuItem, ProgressBar, Panel, ListGroup, ListGroupItem, Row} from 'react-bootstrap';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

export default class SideBar extends React.Component {
  
  constructor() {
    super();
    this.state = {
      completionPercentage: 0
    };

    // this.displayLessons = this.displayLessons.bind(this);
    // this.calculateCompletion = this.calculateCompletion.bind(this);
    this.markComplete = this.markComplete.bind(this);
  }

  componentWillMount() {
    this.props.displayLessons();
    this.props.calculateCompletion()
  }

  // calculateCompletion() {
  //   this.state.completionPercentage = Math.floor((this.props.lessonsCompleted.length / this.props.lessonCount) * 100);
  // }

  // displayLessons() {
  //   var userLessons = this.props.user.lessonsCompleted;
  //   for (var i = 0; i < userLessons.length; i++) {
  //     this.props.lessons[userLessons[i]] = "button-left lesson-completed";
  //   }
  // }

  markComplete(lid) {
    event.preventDefault()
    var lessons = this.props.user.lessonsCompleted;
    var check = lessons.indexOf(lid);
    if (check === -1) {
      lessons.push(lid);
    } 
    // else {
    //   this.state.lessons[lid] = "button-left";
    //   lessons.splice(check, 1);
    // }
    this.displayLessons();
    this.calculateCompletion();
  }

  
  render() {
    return (
      <div className="sidebar-container">
      	<ButtonGroup className="scroll" vertical block>

          <Link to="/">
            <Button  className="prev-next-buttons">
              Log out
            </Button>
          </Link>
    
          <Button>
            <span>Scalability Course Progress</span>
            <ProgressBar  bsStyle="success" now={this.state.completionPercentage} label={`${this.state.completionPercentage}%`} />
          </Button>

          <Panel collapsible defaultExpanded header="Basecamp" className="panel-headings">
            <ButtonGroup fill vertical block> 
         
                
              <Link to="/basecamp/welcome">
                <Button onClick={() => this.props.setCurrentLesson(1)}  className={this.props.lessons[1]}><FontAwesome name="video-camera" className="indent"/>   Welcome</Button>
              </Link> 
              <Link to="/basecamp/resources">
                <Button onClick={() => this.props.setCurrentLesson(2)} className={this.props.lessons[2]}><FontAwesome name="file-text" className="indent"/>   Intro Resources</Button>
              </Link> 
              <Link to="/basecamp/note">
                <Button onClick={() => this.props.setCurrentLesson(3)} className={this.props.lessons[3]}><FontAwesome name="file-text" className="indent"/>   A Note Before You Begin</Button>
              </Link> 
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Getting Started" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/gettingstarted/resources">
                <Button onClick={() => this.props.setCurrentLesson(4)} className={this.props.lessons[4]}><FontAwesome name="file-text" className="indent"/>   Resources</Button>
              </Link>
    
              <Link to="/gettingstarted/codealong1">
                <Button onClick={() => this.props.setCurrentLesson(6)} className={this.props.lessons[6]}><FontAwesome name="video-camera" className="indent"/>   Code Along 1</Button>
              </Link>
              <Link to="/gettingstarted/codealong2">
                <Button onClick={() => this.props.setCurrentLesson(7)} className={this.props.lessons[7]}><FontAwesome name="video-camera" className="indent"/>   Code Along 2</Button>
              </Link>
              <Link to="/gettingstarted/codealong3">
                <Button onClick={() => this.props.setCurrentLesson(8)} className={this.props.lessons[8]}><FontAwesome name="video-camera" className="indent"/>   Code Along 3</Button>
              </Link>
              <Link to="/gettingstarted/wrapup">
                <Button onClick={() => this.props.setCurrentLesson(9)} className={this.props.lessons[9]}><FontAwesome name="file-text" className="indent"/>   Wrap up</Button>
              </Link>   
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Scaling Vertically" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/vertical/resources">
                <Button onClick={() => this.props.setCurrentLesson(10)} className={this.props.lessons[10]}><FontAwesome name="file-text" className="indent" />   Resources</Button>
              </Link>
              <Link to="/vertical/overview">
                <Button onClick={() => this.props.setCurrentLesson(11)} className={this.props.lessons[11]}><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/vertical/action">
                <Button onClick={() => this.props.setCurrentLesson(12)} className={this.props.lessons[12]}><FontAwesome name="video-camera" className="indent" />   Action</Button>
              </Link>
              <Link to="/vertical/challenge">
                <Button onClick={() => this.props.setCurrentLesson(13)} className={this.props.lessons[13]}><FontAwesome name="video-camera" className="indent" />   Scaling Challenge</Button>
              </Link>
              <Link to="/vertical/wrapup">
                <Button onClick={() => this.props.setCurrentLesson(14)} className={this.props.lessons[14]}><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Isolation of Services" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/isolation/resources">
                <Button onClick={() => this.props.setCurrentLesson(15)} className={this.props.lessons[15]}><FontAwesome name="file-text" className="indent" />   Resources</Button>
              </Link>
              <Link to="/isolation/overview">
                <Button onClick={() => this.props.setCurrentLesson(16)} className={this.props.lessons[16]}><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/isolation/scenario">
                <Button onClick={() => this.props.setCurrentLesson(17)} className={this.props.lessons[17]}><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/isolation/solution">
                <Button onClick={() => this.props.setCurrentLesson(18)} className={this.props.lessons[18]}><FontAwesome name="video-camera" className="indent"/>   Code Solution</Button>
              </Link>
              <Link to="/isolation/wrapup">
                <Button onClick={() => this.props.setCurrentLesson(19)} className={this.props.lessons[19]}><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>


          <Panel collapsible defaultExpanded header="Optimizing Content Delivery" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/content/resources">
                <Button onClick={() => this.props.setCurrentLesson(20)} className={this.props.lessons[20]}><FontAwesome name="file-text" className="indent" />   Resources</Button>
              </Link>
              <Link to="/content/overview">
                <Button onClick={() => this.props.setCurrentLesson(21)} className={this.props.lessons[21]}><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/content/scenario">
                <Button onClick={() => this.props.setCurrentLesson(22)} className={this.props.lessons[22]}><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/content/solution1">
                <Button onClick={() => this.props.setCurrentLesson(23)} className={this.props.lessons[23]}><FontAwesome name="video-camera" className="indent" />   S3 + Display</Button>
              </Link>
              <Link to="/content/solution2">
                <Button onClick={() => this.props.setCurrentLesson(24)} className={this.props.lessons[24]}><FontAwesome name="video-camera" className="indent" />   S3 + Cloudfront</Button>
              </Link>
              <Link to="/content/wrapup">
                <Button onClick={() => this.props.setCurrentLesson(25)} className={this.props.lessons[25]}><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Course Conclusion" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/conclusion/wrapup">
                <Button onClick={() => this.props.setCurrentLesson(26)} className={this.props.lessons[26]}><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
              <Link to="/conclusion/resources">
                <Button onClick={() => this.props.setCurrentLesson(27)} className={this.props.lessons[27]}><FontAwesome name="file-text" className="indent" />   Keep Learning</Button>
              </Link>
              <Link to="/conclusion/whatsnext">
                <Button onClick={() => this.props.setCurrentLesson(28)} className={this.props.lessons[28]}><FontAwesome name="video-camera" className="indent" />   What's Next?</Button>
              </Link>
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Appendix" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/appendix/mysql">
                <Button onClick={() => this.props.setCurrentLesson(29)} className={this.props.lessons[29]}><FontAwesome name="video-camera" className="indent" />   MySQL Refresher</Button>
              </Link>
              <Link to="/appendix/vagrant1">
                <Button onClick={() => this.props.setCurrentLesson(30)} className={this.props.lessons[30]}><FontAwesome name="video-camera" className="indent" />   Vagrant, Part 1</Button>
              </Link>
              <Link to="/appendix/vagrant2">
                <Button onClick={() => this.props.setCurrentLesson(31)} className={this.props.lessons[31]}><FontAwesome name="video-camera" className="indent" />   Vagrant, Part 2</Button>
              </Link>
              <Link to="/appendix/bloopers">
                <Button onClick={() => this.props.setCurrentLesson(32)} className={this.props.lessons[32]}><FontAwesome name="video-camera" className="indent" />   Bloopers</Button>
              </Link>
            </ButtonGroup>
          </Panel>

    	  </ButtonGroup>
      </div>
    )
  }
}
