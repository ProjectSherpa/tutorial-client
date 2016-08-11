import React, { PropTypes } from 'react'
import {Row, Col} from 'react-bootstrap';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
	  return (
	    <div className="login">        
	        <Row className="content inner-container">
	          <Col md={4}></Col>
	          <Col md={4}>
	          	<div>THIS IS THE LOGIN PAGE</div>
	          </Col>
	          <Col md={4}></Col>
	        </Row>
	    </div>
	  )
  }
}