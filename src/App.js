import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [coinslist, setCoinslist] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
      .then((response) => {
        console.log(response.data.coins);
        setCoinslist(response.data.coins);
      });
  }, []);

  return (
    <div className="App">
      <div className="cryptoHeader">header</div>
      <div className="cryptoDisplay">
        {coinslist.map((coin) => {
          return (
            <div key={coin.id}>
              <h1>{coin.name}</h1>
              <p>
                {coin.price < 1 ? coin.price.toFixed(4) : coin.price.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
