import React, { PropTypes } from 'react';
import {Row, Col} from 'react-bootstrap';

export default function LearnThis (props) {
  return (
    <div>
    	<Row className="jumbotron">
    	  <Col md={1}></Col>
    	  <Col md={2} className="panel-left">
    	    <img src="https://avatars1.githubusercontent.com/u/20851055?v=3&s=200" alt="Scalability Sherpa Logo" className="jumbo-img"/>
    	  </Col>

    	  <Col md={8} className="panel-right">
    	    <h1 className="pitch">Learn system architecture with your very own Software Engineers leading the way</h1>
    	  </Col>
    	  <Col md={1}></Col>
    	</Row>

    	<Row className="content inner-container">
    	  <h1 className="splash-header">You'll learn and build using the following concepts and technologies...</h1>
    	  <div className="splash-content">

    	      <ul className="list-unstyled splash-techs">
    	        <li>Vertical Scaling</li>
    	        <li>Docker</li>
    	        <li>Content Delivery</li>
    	        <li>Amazon EC2</li>
    	        <li>Amazon S3</li>
    	        <li>Vagrant</li>
    	      </ul>

    	      <ul className="list-unstyled splash-techs">
    	        <li>Horizontal Scaling</li>
    	        <li>Webtorrents</li>
    	        <li>Load Testing</li>
    	        <li>MySQL Scaling</li>
    	        <li>Amazon RDS</li>
    	        <li>Amazon Cloudfront</li>
    	      </ul>

    	      <ul className="list-unstyled splash-techs">
    	        <li>Redis</li>
    	        <li>Node Clusters</li>
    	        <li>Siege</li>
    	        <li>Isolation of Services</li>
    	        <li>Microservices</li>
    	        <li>AWS Lambda</li>
    	      </ul>

    	  </div>
    	</Row>
    </div>
  )
}



