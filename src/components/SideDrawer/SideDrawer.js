import React from 'react';
import {
    Link
  } from "react-router-dom";
import './SideDrawer.css';
import Darktoggle from '../darkmode/Darktoggle'



const SideDrawer = props =>{ 
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
   return (
    <>    
    <nav className={drawerClasses}>
        <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/oscars2020"><li>The Oscars</li></Link>
        <Link to="/movies"><li>Movies</li></Link>
        <Link to="/reports"><li>Reports</li></Link>
        <Link to="/contact"><li>Contact Us</li></Link>
        <Darktoggle/>
        </ul>
    </nav>
    </>
);
}

export default SideDrawer;