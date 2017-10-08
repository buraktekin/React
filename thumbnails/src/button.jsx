var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
	render: function() {
		return (
			<a href={this.props.btnURL} className='btn btn-danger' type='button'>
				{this.props.btnText}
			</a>
		);
	}
});

module.exports = Button;