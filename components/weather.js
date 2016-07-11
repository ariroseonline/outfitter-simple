import React from 'react';
import tags from '../tags-stubs';

var tags = [tags.outfits, tags.articles, tags.temperatures, tags.activities];

var Weather = React.createClass({
  render() {
  	return (
  		<h1>Weather Name (Showers)</h1>
      <img src="http://placehold.it/300x300" />
      <RelatedTags tags={tags} />
  	)
  }
});

export default Weather;