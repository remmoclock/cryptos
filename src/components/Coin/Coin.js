import React from "react";
import "./Coin.css"

function Coin({ coin }) {
  return (
    <div className="coin">
      <h1>{coin && coin.name}</h1>
      <img src={coin && coin.icon} alt="" />
      <h3>
        {coin.price < 1 ? coin.price.toFixed(4) : coin.price.toFixed(2)}$
      </h3>
      <h3>{coin && coin.symbol}</h3>
    </div>
  );
}

export default Coin;
