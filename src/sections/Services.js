import React from 'react';
import './styles/Services.css';

function Services() {
  return (
    <div id="services">

      <h2>Services</h2>

      <div className="services__tabs">
        <button>What we offer</button>
        <button>Onboarding</button>
        <button>Periodic Reports</button>
        <button>Instant Support</button>
        <button>Client portal</button>
      </div>

      <div className="services__info">

        <div className="services__infoCard">

          <div className="services__img"></div>

          <div className="services__text">
            <h3>Count on us for all of your small business needs</h3>
            <ul>
              <li>Bookkeping</li>
              <li>Payroll</li>
              <li>Sales Tax</li>
              <li>Bill Pay</li>
              <li>Accrual</li>
              <li>Loan Assessment</li>
            </ul>
            <button>SIGN UP TODAY</button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Services
