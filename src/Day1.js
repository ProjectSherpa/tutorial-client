import React, { PropTypes } from 'react';
//var Highlight = require('react-highlight');

import Video from './Video';
import RenderMarkdown from './RenderMarkdown';

class Day1 extends React.Component {
	constructor(props) {
    super(props);
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
		};
			         `
  }
  
   

  render() {
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