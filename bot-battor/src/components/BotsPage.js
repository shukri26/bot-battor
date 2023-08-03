import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  function addToArmy(bot) {
    // Add to army if not already in army
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  }

  function removeFromArmy(bot) {
    // Remove from army
    setArmy(army.filter((b) => b !== bot));
  }

  function releaseFromArmy(bot) {
    // Remove from army on the server
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        // Update the state correctly using functional form of setState
        setArmy((prevArmy) => prevArmy.filter((b) => b !== bot));
        setBots((prevBots) => prevBots.filter((b) => b !== bot));
      })
      .catch((error) => {
        console.error("Error releasing bot from army:", error);
      });
  }

  const fetchBots = () => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  };

  useEffect(() => {
    fetchBots();
  }, []);

  return (
    <div>
      <YourBotArmy army={army} handleRemove={removeFromArmy} releaseFromArmy={releaseFromArmy} />
      <BotCollection handleAdd={addToArmy} bots={bots} releaseFromArmy={releaseFromArmy} />
    </div>
  );
}

export default BotsPage;
