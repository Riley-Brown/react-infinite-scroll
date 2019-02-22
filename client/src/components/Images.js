import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Images extends Component {
  state = {
    images: [],
    count: 30,
    start: 1
  };
  componentDidMount() {
    const { count, start } = this.state;
    axios.get(`/api/photos?count=${count}&start=${start}`).then(res =>
      this.setState({
        images: res.data
      })
    );
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
