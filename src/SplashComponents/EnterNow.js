import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import {Button} from 'react-bootstrap';

export default function EnterNow (props) {
  return (
    <div className="faq centered">
      <Link className="enter-now" to="/login">
        <Button bsStyle="success" className="enter-now-button">Get Started and Explore the Course</Button>
      </Link>
    </div>
  )
}  
