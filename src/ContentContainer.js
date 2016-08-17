import React, { PropTypes } from 'react'
import {DropdownButton, MenuItem, ButtonGroup, Button, Col} from 'react-bootstrap';

export default function ContentContainer (props) {
  return (
    <div>
      <ButtonGroup justified>
         <Button className="prev-next-buttons" href="#"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>   Previous Lesson</Button>
         <Button className="prev-next-buttons" href="#">Mark complete and continue   <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Button>
       </ButtonGroup>
    </div>
  )
}