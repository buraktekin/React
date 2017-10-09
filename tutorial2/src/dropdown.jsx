// Dropdown button to experience state concept.
var React = require('react');
var Button = require('./button');
var ListItem = require('./listItem');

var Dropdown = React.createClass({
	getInitialState: function() {
		return { show: false }
	},
	handleClick: function() {
		this.setState({ show: !this.state.show });
	},
	handleItemClick: function(item) {
		this.setState({ 
			show: false,
			itemTitle: item
		})
	},
	render: function() {
		var items = this.props.items.map(function(option) {
			return (
				<ListItem 
					item={ option } 
					whenItemClicked={this.handleItemClick}
					className = {this.state.itemTitle === option ? " active" : ""}
				/>
			)
		}.bind(this));
		return (
			<div className="dropdown">
				<Button 
					whenClicked={ this.handleClick } 
					btnText={ this.state.itemTitle || this.props.placeholder }
				/>
				<ul className={ "dropdown-menu" + (this.state.show ? " show" : "") }>{ items }</ul>
			</div>

		);
	}
});

module.exports = Dropdown;