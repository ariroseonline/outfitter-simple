import React from 'react';
import ItemGrid from './item-grid';

var Activities = React.createClass({
  render() {
  	return (
  		<div>
  			<h1>Activities</h1>
  			<button>Add</button>
  			<ItemGrid items={""} />
  		</div>
  	)
  }
});

export default Activities;