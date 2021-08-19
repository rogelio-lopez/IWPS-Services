import React from 'react';
import './styles/Header.css';
import { Button } from '@material-ui/core';
import Burger from './Burger.js';

function Header({toggleBurger, setToggleBurger}) {

  return (
    <header className="header">
      <a className='header__logo' href="#home">
        <span>IWPS</span>
        <span>SERVICES</span>
      </a>

      <nav>
        <Button><a href="#about">about</a></Button>
        <Button><a href="#team">team</a></Button>
        <Button><a href="#prices">prices</a></Button>
      </nav>

      <Button className="header__contact" variant="contained"><a href="#contact">contact</a></Button>

      {/* Burger for Sidebar */}
      <Burger toggleBurger={toggleBurger} setToggleBurger={setToggleBurger}/>

    </header>
  )
}

export default Header;
