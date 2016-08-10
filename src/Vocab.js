import React, { PropTypes } from 'react';
//var Highlight = require('react-highlight');

import Video from './Video';
import LocalVideo from './LocalVideo';

class Vocab extends React.Component {


  render() {
    return (
      <div className="post">
        
        <h2>Scalability Vocab: Preparing for the Climb</h2>
        <iframe src="https://player.vimeo.com/video/178213627" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowFullscreen></iframe>
<p><a href="https://vimeo.com/178213627">02 AvalancheDay1Test1</a> from <a href="https://vimeo.com/user55292472">Scalability Sherpa</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        <h3>The Gear You Need</h3>
        <p>What makes React so convenient for building user interfaces is that data is either received from a component’s parent component, or it’s contained in the component itself. Before we jump into code, let’s make sure we have a high level understanding of components.</p>
        <br />
        <br />
        <LocalVideo />
        <br />
        <p>"What makes React so convenient for building user interfaces is that data is either received from a component’s parent component, or it’s contained in the component itself. Before we jump into code, let’s make sure we have a high level understanding of components."</p>

      </div>
    );
  }
}

export default Vocab;