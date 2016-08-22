import React, { PropTypes } from 'react';
import {Col, Row} from 'react-bootstrap';
export default function Reviews (props) {
  return (
    <div className="reviews">
      <hr/>
      <br/>
      <h1 className="splash-header review-header">Who's Scaling?</h1>
			<Row>
	      <Col md={1}></Col>
	      <Col className="centered" md={5}>
	        <blockquote className="twitter-tweet" data-lang="en"><p lang="und" dir="ltr"><a href="https://t.co/vTJn8LzAuK">https://t.co/vTJn8LzAuK</a></p>&mdash; Cool Go (@cool_golang) <a href="https://twitter.com/cool_golang/status/766452138360901632">August 19, 2016</a></blockquote>
	        <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">We&#39;ve been improving our scalability via addressing the root cause: removing users by making our product worse.</p>&mdash; Honest Status Page (@honest_update) <a href="https://twitter.com/honest_update/status/763415124556275712">August 10, 2016</a></blockquote>
	      </Col>
	      <Col className="centered" md={5}>
	        <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I just published “Go Microservice in 7 Days” <a href="https://t.co/TCRd8A23dG">https://t.co/TCRd8A23dG</a></p>&mdash; Scalability Sherpa (@scalingsherpa) <a href="https://twitter.com/scalingsherpa/status/766725186674528256">August 19, 2016</a></blockquote>
	      </Col>
	      <Col md={1}></Col>
	    </Row>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}  