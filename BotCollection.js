import { useEffect, useState } from "react";
import { fetchBots } from "../utils/apiService";

function BotCollection({ enlistBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetchBots().then(setBots);
  }, []);

  return (
    <div>
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
