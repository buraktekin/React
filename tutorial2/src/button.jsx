var React = require('react');

var Button = React.createClass({
	render: function() {
		return (
			<button className='btn btn-danger' type='button' onClick={this.props.whenClicked}>
				{this.props.btnText}
			</button>
		);
	}
});

module.exports = Button;