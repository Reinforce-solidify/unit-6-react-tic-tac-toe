'use strict';

var React = require('react');
var ReactDOM = require('react-dom');


var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementById('content'));