import React, { PropTypes } from 'react'
import {DropdownButton, MenuItem, ButtonGroup, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router';

export default function ContentContainer (props) {
	
	var currentLesson = props.currentLesson;
	console.log(currentLesson)
	var prevLesson = props.lessonContainer[props.currentLesson-1];
	var nextLesson = props.lessonContainer[props.currentLesson+1];

	var lessonMinus = (currentLesson - 1) % 33;
	var lessonPlus = (currentLesson + 1) % 33;


  return (

    <div>

      <Link to={prevLesson}>
        <Button className="prev-next-buttons" onClick={() => { props.setCurrentLesson(lessonMinus)}}> 
        <span className="glyphicon glyphicon-menu-left" aria-hidden="true"> </span>   
			Previous Lesson
		</Button>
      </Link>
      <Link to={nextLesson}>
        <Button className="prev-next-buttons" onClick={() => { props.setCurrentLesson(lessonPlus)}}>
         	Next Lesson   
        <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
        </Button>
        </Link>
    </div>
  )
}