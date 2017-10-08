var React = require('react');
var ReactDOM = require('react-dom');
var Thumbnail = require('./thumbnail');

var ThumbnailList = React.createClass({
	render: function() {
		var list = this.props.thumbnailData.map(function(thumbnailProps) {
			return <Thumbnail {...thumbnailProps} />
		});
		return (
			<div className="row">
				<div className="thumbnails">
					{list}
				</div>
			</div>
		);
	}
});

module.exports = ThumbnailList;