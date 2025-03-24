import React, { useState } from "react";
import "./Navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
 
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };




  return (
    <section className="navBarSection">
        <header className="header flex">
            
                <div className="logoDiv">
                    <a href="#logo-flex" className="logo flex">
                      
                    <MdTravelExplore className="icons" />
                    <h1>Travel.</h1>

                   
                    </a>
                    </div>
                    <div className={active}>
                      <ul className="navLists flex">
                        <li className="navItem">
                          <a href="#navLink" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLink">Contact</a>
                        </li>

                        <button className="btn">
                          <a href="#btn">Book Now</a>
                        </button>
                      </ul>

                      <div onClick={removeNavbar}className="closeNavbar">
                      <RiCloseCircleLine className="icons" />

                      </div>
                    </div>

                    <div onClick={showNav} className="toggleNavbar">
                      <TbGridDots className="icons"/>

                    </div>

                
            
        </header>
    </section>
  );
};

export default Navbar;