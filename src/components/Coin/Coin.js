import React from "react";
import "./Coin.css"

function Coin({ coin }) {
  return (
    <div className="coin">
      <h1>Nom: {coin.name}</h1>
      <img src={coin.icon} alt="" />
      <h3>
        Prix: {coin.price < 1 ? coin.price.toFixed(4) : coin.price.toFixed(2)}$
      </h3>
      <h3>Symbole: {coin.symbol}</h3>
    </div>
  );
}

export default Coin;
