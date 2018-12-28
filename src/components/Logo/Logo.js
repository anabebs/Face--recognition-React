import React from 'react';
import Tilt from 'react-tilt';
import  '/Users/anabebic/Desktop/code/face-recognition/face-recognitiom/src/components/Logo/Logo.css';
import brain from './brain.png'
const Logo = () => {

    return (
        <div className= "ma4 mt0"n>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
         <div className="Tilt-inner pa3">
             <img style= {{paddingTop: '5px'}}alt= "brainpic" src={brain}/></div>
        </Tilt> </div>



    );
}

export default Logo;