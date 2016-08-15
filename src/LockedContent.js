import React, { PropTypes } from 'react';

import {Jumbotron, Col, Row, Button} from 'react-bootstrap';

export default function LockedContent (props) {
  return (
    <div>
    	<Jumbotron className="lock-jumbotron">
				<h2 className="locked-text"><span className="glyphicon glyphicon-lock"></span> Lesson contents locked</h2>
				<Button className="locked-enroll" bsStyle="primary"><h4>Enroll in Course to Unlock</h4></Button>
  	  </Jumbotron>

    </div>
  )
}