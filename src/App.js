import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/Coin/Coin";

function App() {
  const [coinslist, setCoinslist] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coinstats.app/public/v1/coins?skip=0&limit=15")
      .then((response) => {
        console.log(response.data.coins);
        setCoinslist(response.data.coins);
      });
  }, []);
  console.log(searchCoin);

  const filteredCoins = coinslist.filter((coin) => {
    return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <img src={coinslist && coinslist[0] && coinslist[0].icon} alt="" />
        <input
          type="text"
          placeholder="Bitcoin..."
          onChange={(e) => setSearchCoin(e.target.value)}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => (
          <Coin coin={coin} key={coin.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
