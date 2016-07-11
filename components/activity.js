import React from 'react';
import tags from '../tags-stubs';

var tags = [tags.outfits, tags.items, tags.temperatures, tags.weathers];

var Activity = React.createClass({
  render() {
  	return (
  		<h1>Activity Name (Casual Work)</h1>
      <img src="http://placehold.it/300x300" />
      <RelatedTags tags={tags} />
  	)
  }
});

export default Activity;