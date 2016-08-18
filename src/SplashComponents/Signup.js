import React, { PropTypes } from 'react'
import {Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, OverlayTrigger} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirm: ''
    }
    this.signUp = this.signUp.bind(this);
  }

  // form field handlers
  handleFirstName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleLastName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleEmail(e) {
    console.log(this.state);
    this.setState({
      email: e.target.value
    });
  }

  handlePassword(e) {
	  this.setState({
	    password: e.target.value
	  });
  }

	handleConfirm(e) {
	  this.setState({
	    confirm: e.target.value
	  });
  }

  signUp(e) {
    console.log('fetch post sent to http://polls.apiblueprint.org/users');
    // e.preventDefault();
    var users = {
      "users": [
        {
          "userid": undefined,
          "first": "Quin",
          "last": "Kinser",
          "email": "quinkinser@gmail.com",
          "username": "quink",
          "lessonsCompleted": []
        },
        {
          "userid": 2,
          "first": "Wayne",
          "last": "Adams",
          "email": "quinkinser@gmail.com",
          "username": "wayney",
          "lessonsCompleted": []
        },
        {
          "userid": 3,
          "first": "Jeremy",
          "last": "Toce",
          "email": "quinkinser@gmail.com",
          "username": "toasty",
          "lessonsCompleted": []
        }
      ]
    }
    fetch('http://private-440399-sherpaapi.apiary-mock.com/users', {
      method: 'POST',
      body: users
    })
    .then(res => res.json())
    .then(resJson => {
      console.log('resJson', resJson);
    })
  }

  render() {
	  return (
	    <div className="login">
		      <Row className="content inner-container">
	          <Col md={4}></Col>
	          <Col md={4}>
	          	<img className="signup-logo" src="https://avatars1.githubusercontent.com/u/20851055?v=3&s=200" alt="Scalability Sherpa Logo"/>
	          	<form>
	              <FormGroup controlId="formBasicText">

	                <FormControl className="login"
	                  type="text"
	                  value={this.state.firstName}
	                  placeholder="First Name"
	                  onChange={this.handleFirstName.bind(this)}
	                />

                  <FormControl className="login"
	                  type="text"
	                  value={this.state.lastName}
	                  placeholder="Last Name"
	                  onChange={this.handleLastName.bind(this)}
	                />

	                <FormControl className="login"
	                  type="text"
	                  value={this.state.email}
	                  placeholder="Email Address"
	                  onChange={this.handleEmail.bind(this)}
	                />

	                <FormControl className="login"
	                  type="password"
	                  value={this.state.password}
	                  placeholder="Password"
	                  onChange={this.handlePassword.bind(this)}
	                />

	                <FormControl className="login"
	                  type="password"
	                  value={this.state.confirm}
	                  placeholder="Confirm Password"
	                  onChange={this.handleConfirm.bind(this)}
	                />
	              </FormGroup>

								<Link to="/login" onClick={this.signUp} className="btn btn-success">Sign Up</Link>


              </form>

	          	  <p className="signup-question">Already have an account? <Link className="space" to="/login">Log in</Link></p>

	          </Col>
	          <Col md={4}></Col>
	        </Row>
	    </div>
	  )
  }
}
