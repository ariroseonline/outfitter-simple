import React from 'react';

var ItemGrid = React.createClass({
	renderItems(items) {
	
		return items.map((item, i)=>{
			return (
				<figure key={i}>
					<img src={item.image} />
					<figcaption>{item.label}</figcaption>
				</figure>
			)
		});
	},

  render() {
  	return (
  		<div>
  			{this.renderItems(this.props.items)}
  		</div>
  	)
  }
});

export default ItemGrid;