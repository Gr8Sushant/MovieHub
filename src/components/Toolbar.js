import React from 'react';
import { Link } from "react-router-dom";
import './Toolbar.css';
import DrawerToggleButton from'./SideDrawer/DrawerToggleButton';
import Darktoggle from './darkmode/Darktoggle';

const Toolbar = props => (
    <>
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_navigation_items">
                <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/oscars2020"><li>The Oscars</li></Link>
                <Link to="/movies"><li>Movies</li></Link>
                <Link to="/reports"><li>Reports</li></Link>
                <Link to="/contact"><li>Contact Us</li></Link>
                <Darktoggle/>
                </ul>
            </div>
        </nav>
    </header>

    <script src="js/darkmode.js"></script>
    </>
);
export default Toolbar;