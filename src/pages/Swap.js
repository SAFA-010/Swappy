import React, { useState } from "react";
import axios from "axios";

function Swap() {
  const [item, setItem] = useState("");
  const [matches, setMatches] = useState([]);

  const findMatch = () => {
    axios.get(`http://localhost:5000/api/products/match/${item}`).then((res) => {
      setMatches(res.data);
    });
  };

  return (
    <div>
      <h1>Find a Swap Match</h1>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={findMatch}>Find Match</button>
      <ul>
        {matches.map((match) => (
          <li key={match._id}>
            {match.name} - Wants: {match.desiredSwap}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Swap;
