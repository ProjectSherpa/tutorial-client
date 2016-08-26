import React, { PropTypes } from 'react';

import {Jumbotron, Col, Row, Button} from 'react-bootstrap';

export default function LockedContent (props) {
  return (
    <div className="wide-over">
    	<Jumbotron className="lock-jumbotron">
				<h2 className="locked-text"><span className="glyphicon glyphicon-lock"></span> Lesson Coming Soon!</h2>
				<Button className="locked-enroll" bsStyle="primary"><h4>Enroll to be Notified of Updates</h4></Button>
  	  </Jumbotron>

    </div>
  )
}