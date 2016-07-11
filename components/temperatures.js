import React from 'react';
import ItemGrid from './item-grid';

var Temperatures = React.createClass({
  render() {
  	return (
  		<div>
  			<h1>Temperatures</h1>
  			<ItemGrid items={""} />
  		</div>
  	)
  }
});

export default Temperatures;