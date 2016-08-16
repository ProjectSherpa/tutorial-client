import React, { PropTypes } from 'react';

export default function MailChimp (props) {
  return (
    <div id="mc_embed_signup">
    <form action="//google.us13.list-manage.com/subscribe/post?u=c8fbbe453a56db68006ae7951&amp;id=a0d85d7576" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
       <div id="mc_embed_signup_scroll">
        <label for="mce-EMAIL">Subscribe to our mailing list</label>
        <input type="email" nameName="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required />

       <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
       </div>
    </form>
    </div>
  )
}