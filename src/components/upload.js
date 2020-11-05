import React from 'react';
import './All-cssFiles/upload.css';

// still in work 


const Upload = () =>{
    return(
        <div>
            <div className = "blurBg"></div>
            <div className  = "upload">
                <div className = "title">
                    <p>Create Post</p>
                </div>
                <div className = "btns">
                    <div id  = "upload-buttons" className = "fa fa-camera"></div>
                    <div id  = "upload-buttons" className = "fa fa-camera"></div>
                </div>
            </div>
        </div>
    );
}

export default Upload;