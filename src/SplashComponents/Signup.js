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
    this.signIn = this.signIn.bind(this);
  }
  
  // form field handlers
  handleName(e) {
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

  signIn(e) {
    console.log('fetch post sent to /api/signup');
    e.preventDefault();
    fetch('/api/signup', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ 
      	name: this.state.name, 
      	email: this.state.email, 
      	password: this.state.password 
      }),
    })
    .then(res => res.json())
    .then(body => {
      // sessions or jwt here?
    });

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
	                  value={this.state.name}
	                  placeholder="Full Name"
	                  onChange={this.handleName.bind(this)}
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

	              <div style={{}}>
	                <Button block bsStyle="success" onClick={this.signIn}>
	                  Sign up
	                </Button>
	              </div>
            </form>

	          	  <p className="signup-question">Already have an account? <Link className="space" to="/login">Log in</Link></p>
	          
	          </Col>
	          <Col md={4}></Col>
	        </Row>
	    </div>
	  )
  }
}