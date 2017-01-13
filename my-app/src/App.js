import React, { Component } from 'react';
import Header from './Header/Header';
import Grid from './Components/Grid';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
        <Footer />
      </div>
    );
  }
}

export default App;
