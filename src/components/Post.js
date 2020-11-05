import React from 'react';
import './All-cssFiles/Post.css';



const Post = ({postPic, profilePic}) => {
    //background image styling
    const bgStyle = {
        // background : `url("${postPic}") top`,
        background : `white`,
    };
    return(
        <div>
            <div className="MidComp">
                <div className="blur" style = {bgStyle}>  </div>
                <div className="post">
                    <div className="user">
                        <div className="user-img-bg">
                            <img className="user-img" src ={profilePic}></img>
                        </div>
                        <div className="adminDetails">
                            <div className="user-data"><p>Honey</p></div>
                            <div className="user-data"><p>Sponcered</p></div>
                        </div>
                    </div>
                    <img className="image" src = {postPic} ></img>
                    <div className="icons">
                            <a href="#"><i className = "fa fa-heart"></i></a>
                            <a href="#"><i className = "fa fa-comments"></i></a>
                            <a href="#"><i className = "fa fa-share"></i></a>
                    </div>
                    <div className="storyText">
                        {/* <p className="bolder">Honey</p> */}
                        <p className="lighter">Honey is a good programmer.Honey is a good programmer.Honey is a good programmer.</p> 
                    </div>
        
                    <div className="comments"  id = "comments">
                        <p><a href="#">View all Comments</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;