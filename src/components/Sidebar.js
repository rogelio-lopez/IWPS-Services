import React from 'react';
import './styles/Sidebar.css';
import { Button } from '@material-ui/core';

function Sidebar({toggleBurger}) {
  return (
    <nav className={(toggleBurger)? "sidebar sidebar-active" : "sidebar"}>
      <Button><a href="#about">about</a></Button>
      <Button><a href="#team">team</a></Button>
      <Button><a href="#prices">prices</a></Button>
      <Button className="header__contact" variant="contained"><a href="#contact">contact</a></Button>
    </nav>
  )
}

export default Sidebar;
