import React, { PropTypes } from 'react'
import {Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePassword(e) {
	  this.setState({
	    password: e.target.value
	  });
  }

  onFormSubmit(e) {
    console.log('fetch post sent to /api/login');
    e.preventDefault();
    const { email, password } = this.state;
    console.log({email, password});
    fetch('/api/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ email, password }),
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
		          	<FormControl className="login"
	                type="text"
	                value={this.state.name}
	                placeholder="Full Name"
	                onChange={this.handleEmail.bind(this)}
	              />

	              <FormControl className="login"
	                type="text"
	                value={this.state.password}
	                placeholder="Password"
	                onChange={this.handlePassword.bind(this)}
	              />

								<div style={{}}>
	                <Button block bsStyle="success" onClick={this.onFormSubmit}>
	                  Log in
	                </Button>
	              </div>

          	  </form>

	          	  <p className="signup-question">Need an account? <Link className="space" to="/signup">Sign up</Link></p>
	          
	          </Col>
	          <Col md={4}></Col>
	        </Row>
	    </div>
	  )
  }
}