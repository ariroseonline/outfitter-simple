import React from 'react';
import tags from '../tags-stubs';

var tags = [tags.outfits, tags.articles, tags.weathers, tags.activities];

var Temperature = React.createClass({
  render() {
  	return (
  		<h1>Temperature Name (zerofifteen)</h1>
      <img src="http://placehold.it/300x300" />
      <RelatedTags tags={tags} />
  	)
  }
});

export default Temperature;