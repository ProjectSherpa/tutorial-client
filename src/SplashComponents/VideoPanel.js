import React, { PropTypes } from 'react';
import Video from '../Video';
import {Row, Col} from 'react-bootstrap';

export default function VideoPanel (props) {
  return (
    <Row>
      <div className="video-panel">
        <Col md={1}></Col>
        <Col md={5}>
            <br/>
            <br/>
            <h1 className="splash-header video-header">Learn Scalability, by Example.</h1>
            <div className="faq-p">
              <p><strong>Scalability Sherpa</strong> is the first and only free course dedicated to the practice of developing highly-scalable and reliable architectural systems.</p>
              <p>We cover what you need to know in order to solve your scaling problems <strong>today</strong>. </p>
              <p>This course is designed by software developers, for software developers. </p>

            </div>
         
        </Col>
        <Col md={5}>

            <br/>
            <br/>
            <div>
              <video id="example_video_1" className="video-js vjs-default-skin splash-video"
                controls preload="auto" width="1080" height="620"
                poster="https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/00+-+intro/00-intro.png"
                data-setup='{"example_option":true}'>
                <source src="https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/00+-+intro/00+-+IntroToScalability4k.mp4" type='video/mp4' />
              </video>
            </div>
            <br/>
            <br/>
          
        </Col>
        <Col md={1}></Col>
      </div>
    </Row>
  )
}  
