import React from 'react'
export default function FAQ (props) {
  return (
    <div className="faq">
      <h1 className="splash-header faq-header">FAQ</h1>
      <div>
        <h1 className="splash-header sub-header">How is the course formatted?</h1>
        <div className="faq-p">
          <p>The course is comprised of a series of modules, each with text content, video lessons, and video code alongs. You'll learn, and then solve a scalability problem using a common industry tool.</p>
        </div>
      </div>
      <div>
        <h1 className="splash-header sub-header">I'm not a full stack developer. Can I still take this course?</h1>
        <div className="faq-p">
          <p>Yes. We have plenty of material meant to get you up to speed. Lots! Scalability concepts won't help you much if you can't code them into existence. You'll learn many new tools and write a lot of code to solidify what you learn in the lessons.   </p>
        </div>
      </div>
      <div>
        <h1 className="splash-header sub-header">Will there be coding?</h1>
        <div className="faq-p">
          <p>Lots! Scalability concepts won't help you much if you can't code them into existence. You'll learn how to use many new tools and you'll write a lot of code to solidify what you learn in the lessons.</p>
        </div>
      </div>

    </div>
  )
}


