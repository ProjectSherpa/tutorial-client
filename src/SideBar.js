import React, { PropTypes } from 'react'
import {ButtonGroup, Button, DropdownButton, MenuItem, ProgressBar, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router';
var FontAwesome = require('react-fontawesome');

export default class SideBar extends React.Component {
  
  constructor() {
    super();
    this.state = {
      user: {
        "userid": 1,
        "first": "Quin",
        "last": "Kinser",
        "email": "quinkinser@gmail.com",
        "username": "quink",
        "lessonsCompleted": ["lid1", "lid2", "lid3", "lid4", "lid7", "lid29", "lid30", "lid20"]
      },
      complete: "button-left lesson-completed",
      incomplete: "button-left",
      lessonCount: 32,
      completionPercentage: 0,
      lessons: {
        lid1: "button-left",
        lid2: "button-left",
        lid3: "button-left",
        lid4: "button-left",
        lid5: "button-left",
        lid6: "button-left",
        lid7: "button-left",
        lid8: "button-left",
        lid9: "button-left",
        lid10: "button-left",
        lid11: "button-left",
        lid12: "button-left",
        lid13: "button-left",
        lid14: "button-left",
        lid15: "button-left",
        lid16: "button-left",
        lid17: "button-left",
        lid18: "button-left",
        lid19: "button-left",
        lid20: "button-left",
        lid21: "button-left",
        lid22: "button-left",
        lid23: "button-left",
        lid24: "button-left",
        lid25: "button-left",
        lid26: "button-left",
        lid27: "button-left",
        lid28: "button-left",
        lid29: "button-left",
        lid30: "button-left",
        lid31: "button-left",
        lid32: "button-left",
      },
    };

    // this.getUsers = this.getUsers.bind(this);
    this.displayLessons = this.displayLessons.bind(this);
    this.calculateCompletion = this.calculateCompletion.bind(this);
    this.markComplete = this.markComplete.bind(this);
  }

  componentWillMount() {
    this.displayLessons();
    this.calculateCompletion()
  }

  calculateCompletion() {
    this.state.completionPercentage = Math.floor((this.state.user.lessonsCompleted.length / this.state.lessonCount) * 100);
  }

  displayLessons() {
    // take this.state.user and display lessons as complete/incomplete based
    // on user's "lessonsCompleted" attribute
    var userLessons = this.state.user.lessonsCompleted;
    for (var i = 0; i < userLessons.length; i++) {
      this.state.lessons[userLessons[i]] = "button-left lesson-completed";
    }
  }

  findUser(users, email){
    // search through users to find desired user

    // store user to state

  }

  // getUsers(){
  //   console.log("Inside getUsers right now");
  //   fetch('http://private-a5d61-sherpaapi.apiary-mock.com/users', {
  //     method: 'GET',
  //     headers: {'content-type': 'application/json'},
  //   })
  //   .then(res => res.json())
  //   .then(users => {
  //     console.log(users)
  //     users.reduce(function(a, b) {
  //       if (b.email === this  
  //     }, false)

  //   });
  // }

  markComplete(lid) {
    console.log("lesson completed!")
    event.preventDefault()
    var lessons = this.state.user.lessonsCompleted;
    //var el = event.target
    //console.log("element", el);
    var check = lessons.indexOf(lid);
    if (check === -1) {
      lessons.push(lid);
    } else {
      this.state.lessons[lid] = "button-left"
      lessons.splice(check, 1);
    }
    this.displayLessons();
    this.calculateCompletion();
 

  }
  
  render() {
    console.log("COMPETION %%", this.state.completionPercentage)
    return (
      <div className="sidebar-container">
      	<ButtonGroup className="scroll" vertical block>

          <Button className="prev-next-buttons">
            Profile
          </Button>
    
          <Button>
            <span>Scalability Course Progress</span>
            <ProgressBar  bsStyle="success" now={this.state.completionPercentage} label={`${this.state.completionPercentage}%`} />
          </Button>

          <Panel collapsible defaultExpanded header="Basecamp" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/basecamp/welcome">
                <Button id="lid1" onClick={() => this.markComplete("lid1")}  className={this.state.lessons.lid1}><FontAwesome name="video-camera" className="indent"/>   Welcome</Button>
              </Link>
              <Link to="/basecamp/resources">
                <Button id="lid2" onClick={() => this.markComplete("lid2")} className={this.state.lessons.lid2}><FontAwesome name="file-text" className="indent"/>   Intro Resources</Button>
              </Link> 
              <Link to="/basecamp/note">
                <Button id="lid3" onClick={() => this.markComplete("lid3")} className={this.state.lessons.lid3}><FontAwesome name="file-text" className="indent"/>   A Note Before You Begin</Button>
              </Link> 
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Getting Started" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/gettingstarted/resources">
                <Button id="lid4" onClick={() => this.markComplete("lid4")} className={this.state.lessons.lid4}><FontAwesome name="file-text" className="indent"/>   Resources</Button>
              </Link>
              <Link to="/gettingstarted/intro">
                <Button id="lid5" onClick={() => this.markComplete("lid5")} className={this.state.lessons.lid5}><FontAwesome name="video-camera" className="indent"/>   Introduction to System Architecture</Button>
              </Link>
              <Link to="/gettingstarted/codealong1">
                <Button id="lid6" onClick={() => this.markComplete("lid6")} className={this.state.lessons.lid6}><FontAwesome name="video-camera" className="indent"/>   Code Along 1</Button>
              </Link>
              <Link to="/gettingstarted/codealong2">
                <Button id="lid7" onClick={() => this.markComplete("lid7")} className={this.state.lessons.lid7}><FontAwesome name="video-camera" className="indent"/>   Code Along 2</Button>
              </Link>
              <Link to="/gettingstarted/codealong3">
                <Button id="lid8" onClick={() => this.markComplete("lid8")} className={this.state.lessons.lid8}><FontAwesome name="video-camera" className="indent"/>   Code Along 3</Button>
              </Link>
              <Link to="/gettingstarted/wrapup">
                <Button id="lid9" onClick={() => this.markComplete("lid9")} className={this.state.lessons.lid9}><FontAwesome name="file-text" className="indent"/>   Wrap up</Button>
              </Link>   
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Scaling Vertically" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/vertical/resources">
                <Button id="lid10" onClick={() => this.markComplete("lid10")} className={this.state.lessons.lid10}><FontAwesome name="file-text" className="indent" />   Resources</Button>
              </Link>
              <Link to="/vertical/overview">
                <Button id="lid11" onClick={() => this.markComplete("lid11")} className={this.state.lessons.lid11}><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/vertical/action">
                <Button id="lid12" onClick={() => this.markComplete("lid12")} className={this.state.lessons.lid12}><FontAwesome name="video-camera" className="indent" />   Action</Button>
              </Link>
              <Link to="/vertical/challenge">
                <Button id="lid13" onClick={() => this.markComplete("lid13")} className={this.state.lessons.lid13}><FontAwesome name="video-camera" className="indent" />   Scaling Challenge</Button>
              </Link>
              <Link to="/vertical/wrapup">
                <Button id="lid14" onClick={() => this.markComplete("lid14")} className={this.state.lessons.lid14}><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Isolation of Services" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/isolation/resources">
                <Button id="lid15" onClick={() => this.markComplete("lid15")} className={this.state.lessons.lid15}><FontAwesome name="file-text" className="indent" />   Resources(+docker videos)</Button>
              </Link>
              <Link to="/isolation/overview">
                <Button id="lid16" onClick={() => this.markComplete("lid16")} className={this.state.lessons.lid16}><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/isolation/scenario">
                <Button id="lid17" onClick={() => this.markComplete("lid17")} className={this.state.lessons.lid17}><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/isolation/solution">
                <Button id="lid18" onClick={() => this.markComplete("lid18")} className={this.state.lessons.lid18}><FontAwesome name="video-camera" className="indent"/>   Code Solution</Button>
              </Link>
              <Link to="/isolation/wrapup">
                <Button id="lid19" onClick={() => this.markComplete("lid19")} className={this.state.lessons.lid19}><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>


          <Panel collapsible defaultExpanded header="Optimizing Content Delivery" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/content/resources">
                <Button id="lid20" onClick={() => this.markComplete("lid09")} className={this.state.lessons.lid20}><FontAwesome name="file-text" className="indent" />   Resources</Button>
              </Link>
              <Link to="/content/overview">
                <Button id="lid21" onClick={() => this.markComplete("lid21")} className={this.state.lessons.lid21}><FontAwesome name="video-camera" className="indent"/>   Overview</Button>
              </Link>
              <Link to="/content/scenario">
                <Button id="lid22" onClick={() => this.markComplete("lid22")} className={this.state.lessons.lid22}><FontAwesome name="gamepad" className="indent" />   Gameday</Button>
              </Link>
              <Link to="/content/solution1">
                <Button id="lid23" onClick={() => this.markComplete("lid23")} className={this.state.lessons.lid23}><FontAwesome name="video-camera" className="indent" />   S3 + Display</Button>
              </Link>
              <Link to="/content/solution2">
                <Button id="lid24" onClick={() => this.markComplete("lid24")} className={this.state.lessons.lid24}><FontAwesome name="video-camera" className="indent" />   S3 + Cloudfront</Button>
              </Link>
              <Link to="/content/wrapup">
                <Button id="lid25" onClick={() => this.markComplete("lid25")} className={this.state.lessons.lid25}><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Course Conclusion" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/conclusion/wrapup">
                <Button id="lid26" onClick={() => this.markComplete("lid26")} className={this.state.lessons.lid26}><FontAwesome name="video-camera" className="indent" />   Wrap up</Button>
              </Link>
              <Link to="/conclusion/resources">
                <Button id="lid27" onClick={() => this.markComplete("lid27")} className={this.state.lessons.lid27}><FontAwesome name="file-text" className="indent" />   Keep Learning</Button>
              </Link>
              <Link to="/conclusion/whatsnext">
                <Button id="lid28" onClick={() => this.markComplete("lid28")} className={this.state.lessons.lid28}><FontAwesome name="video-camera" className="indent" />   What's Next?</Button>
              </Link>
            </ButtonGroup>
          </Panel>

          <Panel collapsible defaultExpanded header="Appendix" className="panel-headings">
            <ButtonGroup fill vertical block>  
              <Link to="/appendix/mysql">
                <Button id="lid29" onClick={() => this.markComplete("lid29")} className={this.state.lessons.lid29}><FontAwesome name="video-camera" className="indent" />   MySQL Refresher</Button>
              </Link>
              <Link to="/appendix/vagrant1">
                <Button id="lid30" onClick={() => this.markComplete("lid30")} className={this.state.lessons.lid30}><FontAwesome name="video-camera" className="indent" />   Vagrant, Part 1</Button>
              </Link>
              <Link to="/appendix/vagrant2">
                <Button id="lid31" onClick={() => this.markComplete("lid31")} className={this.state.lessons.lid31}><FontAwesome name="video-camera" className="indent" />   Vagrant, Part 2</Button>
              </Link>
              <Link to="/appendix/bloopers">
                <Button id="lid32" onClick={() => this.markComplete("lid32")} className={this.state.lessons.lid32}><FontAwesome name="video-camera" className="indent" />   Bloopers</Button>
              </Link>
            </ButtonGroup>
          </Panel>

    	  </ButtonGroup>
      </div>
    )
  }
}
