import React, { PropTypes } from 'react'
import {Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Checkbox} from 'react-bootstrap';
import {Link} from 'react-router';

export default class BetaLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      input: ''
    }
    this.sendInfo = this.sendInfo.bind(this);
  }

  handleFirst(e) {
    this.setState({
      first: e.target.value
    });
  }

  handleLast(e) {
	  this.setState({
	    last: e.target.value
	  });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  sendInfo(e) {
    console.log('fetch post sent to apiary');
    console.log(this.state.first)
    // e.preventDefault();
    fetch('http://private-a5d61-sherpaapi.apiary-mock.com/users', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({ 
        first: this.state.first, 
        last: this.state.last, 
        email: this.state.email 
      }),
    })
    .then(res => res.json())

  }

  
  render() {
	  return (
	    <div className="login">        
	        <Row className="content inner-container">
	          <Col md={4}></Col>
	          <Col md={4}>
              <h1 className="faq-header">Start scaling with us.</h1>
              <br/>
	          	<form>
		          	<FormControl className="login"
	                type="text"
	                value={this.state.first}
	                placeholder="First Name"
	                onChange={this.handleFirst.bind(this)}
	              />

	              <FormControl className="login"
	                type="password"
	                value={this.state.last}
	                placeholder="Last Name"
	                onChange={this.handleLast.bind(this)}
	              />

                <FormControl className="login"
                  type="text"
                  value={this.state.email}
                  placeholder="Email Address"
                  onChange={this.handleEmail.bind(this)}
                />

                <ControlLabel>How did you hear about us?</ControlLabel>
                <FormGroup>
                  <Checkbox inline>
                    Twitter
                  </Checkbox>
                  {' '}
                  <Checkbox inline>
                    Google Search
                  </Checkbox>
                  {' '}
                  <Checkbox inline>
                    AWS Event
                  </Checkbox>
                </FormGroup>

								<Link to="/basecamp/welcome" onClick={this.sendInfo} className="btn btn-success">Let's Get Started!</Link>
          	  </form>
	          	  <p className="signup-question">I don't want to provide my email, take me to the  <Link className="space" to="/basecamp/welcome">Course</Link></p>
	          
	          </Col>
	          <Col md={4}></Col>
	        </Row>
	    </div>
	  )
  }
}