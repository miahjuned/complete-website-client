import React, { useContext } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import "./NavbarArea.css";
import logo from '../../images/Kaan-FitnessFinal-With-Tagline-White.jpg'
import FigureImage from "react-bootstrap/esm/FigureImage";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { UserContext } from '../../App';


const NavbarArea = () => {
  
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
console.log(loggedInUser)
  return (
    // bg="dark" variant="dark"
      <Navbar collapseOnSelect expand="lg" className="navbar_conteinar" >
      <Link to="/home">
        <NavbarBrand>
          <FigureImage 
            width={200}
            alt="Adam khan"
            src={logo}
          />
          {/* <img src={logo} alt=""/> */}
          </NavbarBrand>
        </Link>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse className="justify-content-md-end" id="responsive-navbar-nav">
        <Nav className="ml-auto">
            <Link className="pr-5 navbarItem" to="/home">Home</Link>
            <Link className="pr-5 navbarItem" to="/admin">Deshboard</Link>
            <Link className="pr-5 navbarItem" to="/about">About</Link>
            <Link className="pr-5 navbarItem" to="/Blog/Post">Blog</Link>
            <Link className="pr-5 navbarItem" to="/Contact">Contact us</Link>
        </Nav>
        <Nav className="ml-auto">
          <Link className="pr-5 loginBtn" to="/login">
            <Button variant="outline-danger"> 
              {loggedInUser.email ? <>{loggedInUser.displayName} <img className="loggedInUserPhoto" src={loggedInUser.photoURL} alt="" />  </>:'Login'}
            </Button>
          </Link>
        </Nav>
      </NavbarCollapse>
      </Navbar>
  );
};

export default NavbarArea;
