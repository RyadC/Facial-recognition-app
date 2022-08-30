import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import SignIn from '../components/SignIn/SignIn';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import ParticlesComponent from '../components/ParticlesComponent/ParticlesComponent';


const app = new Clarifai.App({
  apiKey: '867a98526ffc42ba841e276a3279b68b',
});
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      imageURL: '',
      route: 'signin',
    };
  };

  onInputChange = (e) => {
    this.setState({inputValue: e.target.value});
  };

  onClickBtn = (e) => {
    this.setState({imageURL: this.state.inputValue});

    app.models.predict(
      Clarifai.COLOR_MODEL, 
      // '7614',
      // 'c0c0ac362b03416da06ab3fa36fb58e3',
      // '6dc7e46bc9124c5c8824be4822abe105',
      this.state.inputValue
      )
      .then(
        function(response){
          console.log(response)
        },
        function(err){
          console.log(err)
        }
      );
  };

  render() {
      return (
        <div className="App">

          <ParticlesComponent />
          <header className='header'>
            <h1 className='title'>Facial Recognition</h1>
            <Navigation />
            <Logo />
          </header>

          { this.state.route === 'signin'
          ? <SignIn />
          : <div>
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onClickBtn={this.onClickBtn}/>
             <FaceRecognition imageURL={this.state.imageURL}/>
           </div>
          }

            
        

        </div>
    );
  };
  
};

export default App;
