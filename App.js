import { useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    if (!enlistedBots.find((b) => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const removeBot = (botId) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <SortBar />
      <BotCollection enlistBot={enlistBot} />
      <YourBotArmy enlistedBots={enlistedBots} removeBot={removeBot} />
    </div>
  );
}

export default App;
