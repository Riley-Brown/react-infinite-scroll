import React from 'react';

export default function Image({ image, imageClick }) {
  return (
    <img
      className="single-photo"
      src={image.urls.regular}
      alt=""
      onClick={imageClick}
    />
  );
}
