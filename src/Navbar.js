import React from 'react';
import './NavbarSass/Navbar.css';
import {Link} from 'react-router-dom';

const linkStyle = {
    textDecoration : `none`,
    // color:`white`,
    // fontSize:`22px`,
    // listStyle:`none`,
};


const Navbar = ({adminProfilePic}) => {
    return(
        <div className="navbar">
            <ul className="list-bg">
                <Link to = "/" style = {linkStyle} >
                    <li className="list-comp"><i className="fa fa-home"></i></li>
                </Link>
                <Link to = "/shop" style = {linkStyle} >
                    <li className="list-comp"><i className="fa fa-shopping-cart"></i></li>
                </Link>
                <Link to = "/upload" style = {linkStyle} >
                    <li className="list-comp"><i className="fa fa-plus"></i></li>
                </Link>
                <Link to = "/data" style = {linkStyle} >
                    <li className="list-comp"><i className="fa fa-heart"></i></li>
                </Link>
                <Link to = "/profile#p" style = {linkStyle} >
                    <li className="list-comp"><img src = {adminProfilePic}></img></li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;
