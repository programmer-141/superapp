import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//imports 
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
import Home from './components/Home';
import Shop from './components/shop';
import Upload from './components/upload';
import Data from './components/data';
import Profile from './components/profile';
//image imports
import adminProfilePic from './components/images/admin.jpg';
import postPic from './components/images/admin1.jpg';
import profilePic from './components/images/admin.jpg';



function App() {
  return (
    <Router>
      <div className="App"> 
        <TopNavbar />
        <Switch>
          <Route path ="/" exact render = {
            (props) => <Home {...props}  postPic = {postPic} profilePic = {profilePic} />
          } />
          <Route path ="/shop" exact component={Shop} />
          <Route path ="/upload" exact component={Upload} />
          <Route path ="/data" exact component={Data} />
          <Route path ="/profile" exact render = {
            (props) => <Profile {...props} adminProfilePic = {adminProfilePic} />
          } />
        </Switch>
        <Navbar adminProfilePic = {adminProfilePic} />
      </div>
    </Router>
  );
}

export default App;
