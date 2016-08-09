import React, { PropTypes } from 'react';
//var Highlight = require('react-highlight');

//var WebTorrent = require('webtorrent');

import Video from './Video';
import RenderMarkdown from './RenderMarkdown';

class Day1 extends React.Component {
	constructor(props) {
    super(props);
    console.log('hello from Day 1');
    this.state = {
    	video: {}
    }
    this.code = `
		var preorderTraversal = function(root) {
		    var array = [];
		    var ans = [];
		    var cur = root;
		    
		    if(root === null)
		        return [];
		    
		    array.push(cur);
		    do{
		        if(cur !== null)
		            ans.push(cur.val);
		            
		        if(cur.right !== null)
		            array.push(cur.right)
		        
		        if(cur.left !== null)
		            array.push(cur.left)
		            
		        cur = array.pop();
		    }while(array.length > 0)
		    
		    return ans;
		};	         `

		this.startTorrent = this.startTorrent.bind(this);

  }
  componentDidMount(){
  	this.startTorrent();
  }

  startTorrent(){
  	var client = new WebTorrent();
    var torrentId = 'magnet:?xt=urn:btih:9f92eb86683d64972a0bbcb49598175dc622af4e&dn=03+Avalanche+Testing+2+compressed.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io'
    var video;
    var that = this;

  	client.add(torrentId, function (torrent) {
  	  // do something with the torrent
      video = torrent.files[0];
      that.setState({video: video});

  	});	  
  }


   

  render() {
  	if (this.state) {
  	  console.log('VIDEO: ', this.state.video);
    }
    return (
      <div className="post">
        
        <h2>DAY 1: Virtual Machines Made Easy</h2>

        <h3>Introduction</h3>

        <RenderMarkdown markdown={this.code}/>
        
        <p>What makes React so convenient for building user interfaces is that data is either received from a component’s parent component, or it’s contained in the component itself. Before we jump into code, let’s make sure we have a high level understanding of components.</p>
        <br />
        <div className='javascript'>
          
        </div>
        <br />
        <Video />
        <br />
        <p>"What makes React so convenient for building user interfaces is that data is either received from a component’s parent component, or it’s contained in the component itself. Before we jump into code, let’s make sure we have a high level understanding of components."</p>

      </div>
    );
  }
}

export default Day1;