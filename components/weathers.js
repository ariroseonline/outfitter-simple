import React from 'react';
import ItemGrid from './item-grid';

var Weathers = React.createClass({
  render() {
  	return (
  		<div>
  			<h1>Weathers</h1>
  			<button>Add</button>
  			<ItemGrid items={""} />
  		</div>
  	)
  }
});

export default Weathers;