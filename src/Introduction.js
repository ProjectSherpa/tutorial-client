import React, { PropTypes } from 'react';

export default class Introduction extends React.Component {
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
        
        <h2>Introduction: Arrival at Basecamp</h2>

        <h3>How to make use of your Sherpa</h3>
        <p>What makes React so convenient for building user interfaces is that data is either received from a component’s parent component, or it’s contained in the component itself. Before we jump into code, let’s make sure we have a high level understanding of components.</p>
        
        <p>"What makes React so convenient for building user interfaces is that data is either received from a component’s parent component, or it’s contained in the component itself. Before we jump into code, let’s make sure we have a high level understanding of components."</p>

      </div>
    );
  }
}