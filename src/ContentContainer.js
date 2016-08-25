import React, { PropTypes } from 'react'
import {DropdownButton, MenuItem, ButtonGroup, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router';

export default function ContentContainer (props) {

  return (

    <div>

      <Link to={props.lessonContainer[props.currentLesson-1]}>
        <Button className="prev-next-buttons" onClick={() => props.setCurrentLesson(props.currentLesson-1)}> 
        <span className="glyphicon glyphicon-menu-left" aria-hidden="true"> </span>   
			Previous Lesson
		</Button>
      </Link>
        <Button className="prev-next-buttons">
         	Next Lesson   
        <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
        </Button>
    </div>
  )
}