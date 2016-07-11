import React from 'react';
import RelatedTags from './related-tags';
import tags from '../tags-stubs';

var tags = [tags.articles, tags.temperatures, tags.activities, tags.weathers];

var Outfit = React.createClass({

  render() {
  	return (
  		<h1>Outfit Name</h1>
      <img src="http://placehold.it/300x300" />
      <RelatedTags tags={tags} />
  	)
  }
});

export default Outfit;