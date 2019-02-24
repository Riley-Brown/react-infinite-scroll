import React from 'react';

export default function Image(props) {
  return (
    <img
      className="single-photo"
      src={props.image.urls.regular}
      alt=""
      onClick={props.imageClick}
    />
  );
}
