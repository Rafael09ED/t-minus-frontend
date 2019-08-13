import React from 'react';
import { NavLink } from 'react-router-dom'

function NavBar(props) {
    if (props.match.params.path === '-') return null
    
    return (
        <div id="navbar">
            t-min.us
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/list">Countdowns</NavLink>
            <NavLink to="/create">Create</NavLink>
        </div>
    );
}

export default NavBar;
