import React, { useState } from 'react';
import './styles/Home.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


function Home() {

  const [toggleBurger, setToggleBurger] = useState(false);

  return (
    <section id='home' className={(toggleBurger)? "home-active" : ''}>

      <Header toggleBurger={toggleBurger} setToggleBurger={setToggleBurger}/>

      <Sidebar toggleBurger={toggleBurger}/>

      {/* if toggle make padding larger */}
      <div className="home__container">
        <div className="home__bgImage"></div>
        <div className="home__text">
          <p>YOUR LOCAL BUSINESS GROWTH PARTNER</p>
          <p><span>Bookkeeping</span> and <span>Accounting</span> Services for Small Businesses</p>
        </div>
      </div>         
    </section>
  )
}

export default Home
