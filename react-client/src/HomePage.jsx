import React, { Component } from 'react';
import Categories from './Categories';
import Footer from './Footer';

class HomePage extends Component {
  render() {
    return (
    <div>
      <div className="container-fluid">
        <img src={ require('./assets/images/cattack.gif') } className="img-fluid" />
        <Categories />
      </div>
      <Footer />
    </div>
    )
  }
}
export default HomePage;