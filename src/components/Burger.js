import React from 'react';
import './styles/Burger.css';

function Burger({toggleBurger, setToggleBurger}) {

    const toggle = () => setToggleBurger(!toggleBurger); 

    return (
        <div 
            className={(toggleBurger)? 'burger burger-active' : 'burger'}
            onClick={toggle}>
            <span></span>
        </div>
    )
}

export default Burger
