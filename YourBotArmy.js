import { useState } from "react";
import { deleteBot } from "../utils/apiService";
import ConfirmationPopup from "./ConfirmationPopup";

function YourBotArmy({ enlistedBots, removeBot }) {
  const [selectedBot, setSelectedBot] = useState(null);

  const confirmDelete = (bot) => {
    setSelectedBot(bot);
  };

  const handleDelete = () => {
    deleteBot(selectedBot.id).then(() => {
      removeBot(selectedBot.id);
      setSelectedBot(null);
    });
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {enlistedBots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <button onClick={() => removeBot(bot.id)}>Remove</button>
            <button onClick={() => confirmDelete(bot)}>Delete Permanently</button>
          </div>
        ))}
      </div>

      {selectedBot && <ConfirmationPopup bot={selectedBot} confirmDelete={handleDelete} cancel={() => setSelectedBot(null)} />}
    </div>
  );
}

export default YourBotArmy;
