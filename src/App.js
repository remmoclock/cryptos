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
      <div className="cryptoDisplay">Coins</div>
    </div>
  );
}

export default App;
