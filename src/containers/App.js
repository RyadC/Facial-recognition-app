import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';

class App extends Component {
  render() {
      return (
        <div className="App">
          <header className='header'>
            <h1 className='title'>Facial Recognition</h1>
            <Navigation />
            <Logo />
          </header>
          <Rank />
          <ImageLinkForm />
          {/*<FaceRecognition /> */}
        </div>
    );
  };
};

export default App;
