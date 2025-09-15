import React from 'react';
import { Link, NavLink } from 'react-router';


const Menu = () => {
    return (
        <div>
            <ul>
                <li> <NavLink className={({isActive})=> isActive?'active-item':'pending-item' } to = '/'>Home</NavLink> </li>
                <li> <NavLink className={({isActive})=> isActive?'active-item':'pending-item' } to= '/about/Billy/10'>About</NavLink> </li>
                <li> <NavLink className={({isActive})=> isActive?'active-item':'pending-item' } to= '/contact'>Contact</NavLink> </li>
            </ul>
        </div>
    );
};

export default Menu;