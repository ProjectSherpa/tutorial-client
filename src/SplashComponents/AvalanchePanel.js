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
          <h1 className="splash-header video-header">Test Your Architecture</h1>
          <div className="faq-p">
            <p>The <strong>Avalanche Testing Tool</strong> was developed for users to simulate traffic peaks and determine the efficacy of their system architecture.</p>
            <p>Use Avalanche during the course as a metric of scalability success, or as a standalone load tester to determine the bottlenecks on your deployed website.</p>
          </div>
        </Col>
        <Col md={1}></Col>
      </div>
    </Row>
  )
}
