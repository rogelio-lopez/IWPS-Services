import React from 'react';
import './styles/About.css';
import InfoBox from '../components/InfoBox';

function About() {
  return (
    <section id='about'>

      <h2>About Us</h2>

      <div className="about__text">
        <p>
        IWPS provides sound independent guidance to clients who are resident in and citizens of countries in Latin America and the Caribbean regarding the appropriate international planning of wealth in order to ensure its efficient and effective transfer to future generations in a manner that maximizes fiscal efficiencies.
        </p>
      </div>

      <div className="about__infoBoxes">
        <InfoBox 
          text='Whether you need light bookkeeping or full service accounting, we’re your local trusted business center.'
        />
        <InfoBox 
          text='We make sure that all aspects of your business are taken care of so that you can focus on building your success. '
        />
        <InfoBox 
          text='We provide a superior level of personal service that is impossible to achieve at large institutions.'
        />
      </div>
    </section>
  )
}

export default About;
