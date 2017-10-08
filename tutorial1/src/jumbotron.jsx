var React = require('react');
var ReactDOM = require('react-dom');

var Thumbnail = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
			  <h1>{this.props.title}</h1>
			  <p>{this.props.description}</p>
			  <p>
			  	<a className="btn btn-primary btn-lg" href={this.props.btnURL} role="button">{this.props.btnText}</a>
			  </p>
			</div>
		);
	}
});