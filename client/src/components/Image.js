import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Zoom from 'react-reveal/Zoom';

export default function Image(props) {
  return (
    <Zoom>
      <img
        className="single-photo"
        src={props.image.urls.regular}
        alt=""
        onClick={props.imageClick}
      />
    </Zoom>
  );
}
