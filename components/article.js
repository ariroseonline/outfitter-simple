import React from 'react';
import tags from '../tags-stubs';

var tags = [tags.outfits, tags.temperatures, tags.activities, tags.weathers];

var Article = React.createClass({
  render() {
  	return (
  		<h1>Item Name (Shirt)</h1>
      <img src="http://placehold.it/300x300" />
      <RelatedTags tags={tags} />
  	)
  }
});

export default Article;