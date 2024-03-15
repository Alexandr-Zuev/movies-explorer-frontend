import React, { useContext } from 'react';
import { NavTabContext } from '../App/App';


const NavTabMenu = () => {

    const { openNavTabWindow } = useContext(NavTabContext);
    return (
        <button type="button" className="nav-tab-menu" onClick={openNavTabWindow}></button>
    );
}

export default NavTabMenu;

