import React, { PropTypes } from 'react'
import {DropdownButton, MenuItem, ButtonGroup, Button} from 'react-bootstrap';

export default function ContentContainer (props) {
  return (
    <div>
      <ButtonGroup justified>
         <Button href="#"><span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>   Mark complete and continue</Button>
         <Button href="#">Next Lesson   <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Button>
       </ButtonGroup>
    </div>
  )
}