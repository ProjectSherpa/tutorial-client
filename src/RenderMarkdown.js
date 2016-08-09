import React, { PropTypes } from 'react'
var Remarkable = require('remarkable');
var md = new Remarkable();

export default class RenderMarkdown extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    // pseudo code here, depends on the parser
    var markdown = md.render(this.props.markdown);
    //var markdown = md.render('# Remarkable works (h1)');
    return(
    	<div dangerouslySetInnerHTML={{__html: markdown}} />
    )

	}
}