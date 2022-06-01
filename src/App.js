import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/Coin/Coin";

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
      <div className="cryptoHeader">
        <img
          src={coinslist && coinslist[0] && coinslist[0].icon}
          alt="header"
        />
        <input type="text" placeholder="Bitcoin..." />
      </div>
      <div className="cryptoDisplay">
        {coinslist.map((coin) => (
          <Coin coin={coin} key={coin.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
