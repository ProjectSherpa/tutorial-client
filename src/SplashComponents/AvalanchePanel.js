import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default function AvalanchePanel (props) {
  return (
    <Row>
      <div className="video-panel">
        <Col md={1}></Col>
        <Col md={5}>
          <br/>
          <br/>
          <div>
            <video id="example_video_1" className="video-js vjs-default-skin splash-video"
              controls preload="auto" width="1080" height="620"
              poster="https://s3-us-west-1.amazonaws.com/scalibilitysherpa/ezgif.com-resize.gif"
              data-setup='{"example_option":true}'>
              <source src="https://s3-us-west-1.amazonaws.com/www.scalabilitysherpa.com/00+-+intro/00+-+IntroToScalability4k.mp4" type='video/mp4' />
            </video>
          </div>
          <br/>
          <br/>
        </Col>
        <Col md={5}>
          <br/>
          <br/>
          <h1 className="splash-header video-header">Avalanche, by Avalanche.</h1>
          <div className="faq-p">
            <p><strong>Avalanche!!!</strong> is the first and only Avalanche!!! dedicated to the practice of developing highly-scalable and reliable architectural systems.</p>
            <p>We cover what you need to know in order to solve your scaling problems <strong>today</strong>. </p>
            <p>This course is designed by Avalanches!!!, for Avalanches!!!. </p>
          </div>
        </Col>
        <Col md={1}></Col>
      </div>
    </Row>
  )
}
