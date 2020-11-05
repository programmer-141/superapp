import React from 'react';
import Post from './Post';
const Home = ({postPic, profilePic}) =>{
    return(
        <div>
            {/* Map this item "this item is the post(box)" */}
            <Post profilePic = {profilePic} postPic = {postPic} />
            <Post profilePic = {profilePic} postPic = {postPic} />
        </div>
    );
}

export default Home;