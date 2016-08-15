import React, { PropTypes } from 'react'
var FontAwesome = require('react-fontawesome');
import {Grid, Col, Row, Image} from 'react-bootstrap';

export default function SherpaTeam (props) {
  return (
    <div className="sherpa-team">
      <br/>
    	<h2 className="splash-header team-header">Meet the Team</h2>
    	<Grid>
  	    <Row>
  	      <Col className="centered" xs={6} md={3}>
  	        <Image className="team-images" src="https://avatars1.githubusercontent.com/u/17017549?v=3&s=460" circle />
  	        <h4><b>Quin Kinser</b></h4>
  	        <div className="team-social">
  	          <a className="social-icon" href="https://twitter.com/scalingsherpa"><FontAwesome name="twitter"/></a>
  	          <a className="social-icon" href="https://twitter.com/scalingsherpa"><FontAwesome name="linkedin"/></a>
  	        </div>
  	      </Col>
  	      
  	      <Col className="centered" xs={6} md={3}>
  	        <Image className="team-images" src="https://avatars3.githubusercontent.com/u/15034841?v=3&s=460" circle />
  	        <h4><b>Wayne Adams</b></h4>
  	        <div className="team-social">
  	          <a className="social-icon" href="https://twitter.com/scalingsherpa"><FontAwesome name="twitter"/></a>
  	          <a className="social-icon" href="https://twitter.com/scalingsherpa"><FontAwesome name="linkedin"/></a>
  	        </div>
  	      </Col>
  	      <Col className="centered" xs={6} md={3}>
  	        <Image className="team-images" src="https://avatars3.githubusercontent.com/u/3084928?v=3&s=460" circle />
  	        <h4><b>Abraham Paniagua</b></h4>
  	        <div className="team-social">
  	          <a className="social-icon" href="https://twitter.com/scalingsherpa"><FontAwesome name="twitter"/></a>
  	          <a className="social-icon" href="https://twitter.com/scalingsherpa"><FontAwesome name="linkedin"/></a>
  	        </div>
  	      </Col>
  	      <Col className="centered" xs={6} md={3}>
  	        <Image className="team-images" src="https://avatars3.githubusercontent.com/u/5271229?v=3&s=460" circle />
  	        <h4><b>Jeremy Toce</b></h4>
  	        <div className="team-social">
  	          <a className="social-icon" href="https://twitter.com/scalingsherpa"><FontAwesome name="twitter"/></a>
  	          <a className="social-icon" href="https://twitter.com/scalingsherpa"><FontAwesome name="linkedin"/></a>
  	        </div>
  	      </Col>
  	    </Row>
  	  </Grid>
<hr/>

    </div>
  )
}  

