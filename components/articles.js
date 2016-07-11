import React from 'react';
import ItemGrid from './item-grid';

var Articles = React.createClass({
  render() {
  	return (
  		<div>
  			<h1>Items</h1>
  			<button>Add</button>
  			<ItemGrid items={""} />
  		</div>
  	)
  }
});

export default Articles;