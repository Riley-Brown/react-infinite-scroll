import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Zoom from 'react-reveal/Zoom';

export default class Images extends Component {
  state = {
    images: [],
    count: 10,
    start: 1,
    modalOpen: false,
    modalSrc: ''
  };
  componentDidMount() {
    const { count, start } = this.state;

    // initial api call for images
    axios.get(`/api/photos?count=${count}&start=${start}`).then(res =>
      this.setState({
        images: Array.from(res.data)
      })
    );
  }

  fetchImages = () => {
    const { count, start } = this.state;

    // increases start to get new images
    this.setState({ start: this.state.start + count });

    // gets new images and sets state
    axios.get(`/api/photos?count=${count}&start=${start}`).then(res =>
      this.setState({
        images: this.state.images.concat(res.data)
      })
    );
  };

  // event for image click
  imageClick = e => {
    console.log(e.target.src, 123);
    this.setState({
      modalOpen: !this.state.modalOpen,
      modalSrc: e.target.src
    });
  };

  render() {
    let randomNumber = Math.random();
    return (
      <React.Fragment>
        <div className="images">
          <InfiniteScroll
            dataLength={this.state.images.length}
            next={this.fetchImages}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {this.state.images.map((image, index) => (
              <Image key={index} image={image} imageClick={this.imageClick} />
            ))}
          </InfiniteScroll>
        </div>
        {this.state.modalOpen ? (
          <div
            className={
              this.state.modalOpen ? 'image-modal modal-active' : 'image-modal'
            }
          >
            <img
              src={this.state.modalSrc}
              onClick={this.imageClick}
              alt="Modal"
            />
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
