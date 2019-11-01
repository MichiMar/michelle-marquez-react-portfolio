import React from "react";

const BlogFeatured = props => {
  if (!props.img) {
    return null;
  }

  return (
    <div className="featured-image-wrapper">
      <img src={props.img} />
    </div>
  );
};

export default BlogFeatured;
