import React, { useState } from 'react';
import './styles/Home.css';
import Header from '../components/Header';


function Home() {

  const [toggleBurger, setToggleBurger] = useState(false);

  return (
    <section id='home' className={(toggleBurger)? "home-active" : ''}>

      <Header toggleBurger={toggleBurger} setToggleBurger={setToggleBurger}/>

      {/* if toggle make padding larger */}
      <div className="home__container">
        <div className="home__bgImage"></div>
        <div className="home__text">
          <p>YOUR LOCAL BUSINESS GROWTH PARTNER</p>
          <p>Bookkeeping and Accounting Services for Small Businesses</p>
        </div>
      </div>         
    </section>
  )
}

export default Home
