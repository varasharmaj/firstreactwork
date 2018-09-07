import React, { Component } from 'react';
class HomePage extends Component {
  render() {
    return (
      <div>
        Home page
        <img src={ require('./assets/images/topheader.jpg') } />
      </div>
    )
  }
}
export default HomePage;