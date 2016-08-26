import React, { PropTypes } from 'react'
export default function Pricing (props) {
  return (
    <div >
      <br/>
      <h1 className="splash-header faq-header">Pricing</h1>
      <div>
        <h1 className="splash-header sub-header">This course is completely free. </h1>
        <div className="faq-p">
          <p>We made this course to fill a need in the developer community. The course is completely free for our early users, and we aim to keep it that way for as long as we can. Help us out by leaving feedback and tweeting us @scalingsherpa!</p>
        </div>
      </div>
      <div>
        <h1 className="splash-header sub-header">Will this course always be free?</h1>
        <div className="faq-p">
          <p>We're pretty crafty at keeping costs low, but even a Master Sherpa knows scaling can get expensive. Because everything is live-coded, and because scalabilitysherpa.com aims to follow best practices in terms of scalability, we incur some costs. We haven't needed a commercial grade load balancer yet, so wo we'll cross that bridge when we get there!  </p>
        </div>
      </div>
      <br/>
    </div>
  )
}  
