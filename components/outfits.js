import React from 'react';
import ItemGrid from './item-grid';
import tags from '../tags-stubs';

var Outfits = React.createClass({
  render() {
  	return (
  		<div>
  			<h1>Outfits</h1>
  			<button>Add</button>
  			<ItemGrid items={tags.outfits.items} />
  		</div>
  	)
  }
});

export default Outfits;