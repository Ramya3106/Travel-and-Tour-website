import React from "react";
import "./Navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <section className="navBarSection">
        <header className="header flex">
            
                <div className="logoDiv">
                    <a href="#logo-flex" className="logo flex">
                      
                    <MdTravelExplore className="icons" />
                    <h1>Travel.</h1>

                   
                    </a>
                    </div>
                    <div className="navBar">
                      <ul className="navLists flex">
                        <li className="navItem">
                          <a href="#navLink" className="navLinks">Home</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLinks">Packages</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLinks">Shop</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLinks">About</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLinks">Pages</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLinks">News</a>
                        </li>

                        <li className="navItem">
                          <a href="#navLink" className="navLinks">Contact</a>
                        </li>

                        <button className="btn">
                          <a href="#btn">Book Now</a>
                        </button>
                      </ul>

                      <div className="classNavbar">
                      <RiCloseCircleLine className="icons" />

                      </div>
                    </div>

                    <div className="toggleNavbar">
                      <TbGridDots className="icons"/>

                    </div>

                
            
        </header>
    </section>
  );
};

export default Navbar;