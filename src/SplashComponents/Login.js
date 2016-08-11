import React, { PropTypes } from 'react'
import {Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePassword(e) {
	  this.setState({
	    password: e.target.value
	  });
  }

  onFormSubmit(e) {
    console.log('Form Submitted');
    //e.preventDefault();
    //this.close();
    //const { title, text } = this.state;
    //this.props.onSubmit({ title, text });
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
	                onChange={this.handleName.bind(this)}
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

	          	  <p>Need an account? <Link to="/signup">Sign up</Link></p>
	          
	          </Col>
	          <Col md={4}></Col>
	        </Row>
	    </div>
	  )
  }
}