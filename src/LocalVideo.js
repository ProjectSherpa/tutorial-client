import React from 'react';
import Video from 'react-html5video';


export default class LocalVideo extends React.Component {
	constructor(props) {
	  super(props);
	}

	render() {
	    return (
	        <Video controls autoPlay loop muted
	            onCanPlayThrough={() => {
	                // Do stuff 
	            }}>
	            <source src="https://vimeo.com/178213627" type="video/webm" />
	        </Video>
	    );
	}

}

