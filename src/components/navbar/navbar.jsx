import './navbar.scss';
import React from 'react';
import logo from '../../assets/icons/logo.png';
import home from '../../assets/icons/home.png';
import register from '../../assets/icons/register.webp';
import login from '../../assets/icons/login.png';
import profile from '../../assets/icons/profile.png';
import NavElem from './navElem/navElem';

const Navbar = () => (
  <ul className="navbar">
    <li>
      <NavElem path="/" img={logo} label="Wazo" width="50" height="50" className="logo" />
    </li>
    <li>
      <NavElem path="/" img={home} label="Home" />
    </li>
    <li>
      <NavElem path="/register" img={register} label="Join us" />
    </li>
    <li>
      <NavElem path="/login" img={login} label="Login" />
    </li>
    <li>
      <NavElem path="/profile" img={profile} label="Profile" />
    </li>
  </ul>
);

export default Navbar;
