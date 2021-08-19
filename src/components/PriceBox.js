import React from "react";
import "./styles/PriceBox.css";

function PriceBox({ header, price, bulletpoints }) {
  return (
    <div className="pricebox">
      <div className="pricebox__header">
        <h3>{header}</h3>
      </div>

      <div className="pricebox__img"></div>

      <div className="pricebox__price">
        <p>${price}/mo</p>
        <p>paid monthly</p>
      </div>

      <div className="pricebox__list">
        <ul>
          {bulletpoints.map((point) => {
            return <li>{point}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default PriceBox;
