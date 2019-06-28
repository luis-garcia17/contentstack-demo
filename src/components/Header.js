import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
    <NavLink to="/" activeClassName="is-active"> Home </NavLink>
    <NavLink to="/videos" activeClassName="is-active"> Videos </NavLink>
    </header>
);

export default Header;
