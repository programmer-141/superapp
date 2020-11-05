import React from 'react';
import './All-cssFiles/Profile.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const Profile = ({adminProfilePic}) =>{
    
    const proStyle = {
        // background : `url("${adminProfilePic}") center`,
    };
    return(
        <Router>
            <div style = {{background:`white`}}>
                <div className="bg" style = {proStyle} ></div>
                <div className= "Profile">
                    <div className = "Profile-img">
                        <img src = {adminProfilePic}></img>
                    </div>
                    <div className = "bio-u-name">
                        <p>honey</p>
                    </div>
                    <div className = "bio-row-2">
                        <div className = "follows">
                            <p className = "following">
                                <p>FOLLOWERS</p> <p>360K</p>
                            </p>
                            <p className = "following">
                                <p>FOLLOWING</p> <p>0</p>
                            </p>
                        </div>
                        <div className = "settings">
                            {/* <i className = "fa fa-gear"></i>
                            <p>SETTINGS</p> */}
                        </div>
                    </div>
                    <div className = "buttons-row">
                        <div id = "image-post-btn" className = "post-btn"><i className = "fa fa-image"></i></div>
                        <div id = "video-post-btn" className = "post-btn"><i className="fa fa-video"></i></div>
                        <div id = "bussiness-post-btn" className = "post-btn"><i className = "fa fa-business"></i></div>
                    </div>
                    <div className = "post-section">
                            <div className = "image-post-sec">
                                {/* map this item */}
                                <div className = "image-post"></div>
                                <div className = "image-post"></div>
                                <div className = "image-post"></div>
                                <div className = "image-post"></div>
                                <div className = "image-post"></div>
                                <div className = "image-post"></div>
                            </div>  
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Profile;