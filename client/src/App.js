import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div class="hero is-fullheight is-bold is-info">
          <div class="hero-body">
            <div class="container">
              <div class="header content">
                <h2 class="subtitle is-6">Code Challenge #16</h2>
                <h1 class="title is-1">
                  Infinite Scroll Unsplash Code Challenge
                </h1>
              </div>
              <img
                src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                alt="loading"
              />
              <div class="images" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
