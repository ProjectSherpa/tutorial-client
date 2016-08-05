import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <NavBar />,
    document.getElementById('mount')
  );
});
