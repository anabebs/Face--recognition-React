import React from 'react';
import '/Users/anabebic/Desktop/code/face-recognition/face-recognitiom/src/components/ImageLinkForm/ImageLinkFile.css'

const ImageLinkForm = () => {

    return (
        <div>
            <p className ='f3'>
            {'This Magic Brain will detect faces in Your pictures. Try It!'}
            </p>
        <div className = 'center'>
        <div className= 'form pa4 center br3 shadow-5'>
            <input className = 'f4 pa2 w-70 center' type = 'tex' />
            <button className= "w-30 grow f4 link ph3 pv2 dib grey">Detect</button>
        </div>
        </div>
        </div>

    );

}

export default ImageLinkForm;