import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation.js'
import Logo from '/Users/anabebic/Desktop/code/face-recognition/face-recognitiom/src/components/Logo/Logo.js'
import ImageLinkForm from '/Users/anabebic/Desktop/code/face-recognition/face-recognitiom/src/components/ImageLinkForm/ImageLinkForm.js'

import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Navigation />
         <Logo />
         <ImageLinkForm />
        {/*<FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
