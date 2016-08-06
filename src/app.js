import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
 
const App = () => (
    <Header /> 
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('mount')
  );
});
