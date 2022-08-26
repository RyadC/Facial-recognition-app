import React, { Component } from 'react';
import './App.css';
import Navigation from '../containers/Navigation';
import Logo from '../containers/Logo';
class App extends Component {
  render() {
      return (
        <div className="App">
          <Navigation />
          <Logo />
         {/* <ImageLinkForm />
          <FaceRecognition /> */}
        </div>
    );
  };
};

export default App;
