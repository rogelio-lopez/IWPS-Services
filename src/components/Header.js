import React from 'react';
import './styles/Header.css';
import { Button } from '@material-ui/core';
import Burger from './Burger.js';

function Header({toggleBurger, setToggleBurger}) {
  return (
    <header className="header">
      <a className='header__logo'>
        <span>IWPS</span>
        <span>SERVICES</span>
      </a>

      <nav>
        <Button>about</Button>
        <Button>services</Button>
        <Button>prices</Button>
        <Button>team</Button>
      </nav>

      <Button className="header__contact" variant="contained">contact</Button>


      <Burger toggleBurger={toggleBurger} setToggleBurger={setToggleBurger}/>
      <div className="header__burgerMenu">
        <Button>about</Button>
        <Button>services</Button>
        <Button>prices</Button>
        <Button>team</Button>
        <Button className="header__Burgercontact" variant="contained">contact</Button>
      </div>

    </header>
  )
}

export default Header;
