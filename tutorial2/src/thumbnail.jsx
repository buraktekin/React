var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button');

var Thumbnail = React.createClass({
	render: function() {
		return (
		  <div className="col-sm-6 col-md-4">
		    <div className="thumbnail">
		      <img src={this.props.imgURL} />
		      <div className="caption">
		        <h3>{this.props.title}</h3>
		        <p>{this.props.description}</p>
		        <p>
		        	<Button btnURL={this.props.btnURL} btnText={this.props.btnText} />
		        </p>
		      </div>
		    </div>
		  </div>
		);
	}
});

module.exports = Thumbnail;