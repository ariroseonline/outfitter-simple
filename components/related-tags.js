import React from 'react';

var RelatedTags = React.createClass({
	renderTagItem(tagItem) {
		return (
			<figure>
				<img src={tagItem.image} />
				<figcaption>{tagItem.label}</figcaption>
			</figure>
		)
	},

	renderTag(tag) {
		return (
			<div>
				<h2>{tag.label}</h2>
				{tag.items.map((tagItem)=>{
					return this.renderTagItem(tagItem);
				})}	
			</div>
		)
	},

  render() {
  	return (
  		{this.props.tags.map((tag)=>{
  			this.renderTag(tag);
  		}}
  	)
  }
});

export default RelatedTags;