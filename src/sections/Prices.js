import React from "react";
import "./styles/Prices.css";
import PriceBox from "../components/PriceBox";

function Prices() {
  return (
    <div id="prices">
      <div className="prices__text">
        <h2>Bookkeeping pricing</h2>
        <p>
          All plans include a dedicated bookkeeping team ready to tackle your
          unique accounting needs.
        </p>
      </div>

      <div className="prices__boxes">
        <PriceBox
          header="Sole-up"
          price="175"
          bulletpoints={[
            "Up to 50 transactions",
            "Up to 2 accounts",
            "Accounting Software",
            "Dedicated Accounting Team",
            "Weekly Bookkeeping",
            "Monthly Profit and Loss",
            "Monthly Balance Sheet",
          ]}
        />
        <PriceBox
          header="Start-up"
          price="350"
          bulletpoints={[
            "Up to 50 transactions",
            "Up to 4 accounts",
            "Accounting Software",
            "Dedicated Accounting Team",
            "Weekly Bookkeeping",
            "Monthly Profit and Loss",
            "Monthly Balance Sheet",
          ]}
        />
        <PriceBox
          header="Build-up"
          price="450"
          bulletpoints={[
            "Up to 100 transactions",
            "Up to 6 accounts",
            "Accounting Software",
            "Dedicated Accounting Team",
            "Weekly Bookkeeping",
            "Monthly Profit and Loss",
            "Monthly Balance Sheet",
          ]}
        />
        <PriceBox
          header="Leap-up"
          price="550"
          bulletpoints={[
            "Ulimited transactions",
            "Unlimited accounts",
            "Accounting Software",
            "Dedicated Accounting Team",
            "Weekly Bookkeeping",
            "Monthly Profit and Loss",
            "Monthly Balance Sheet",
          ]}
        />
      </div>
    </div>
  );
}

export default Prices;
