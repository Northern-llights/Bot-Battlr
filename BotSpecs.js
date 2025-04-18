import React from "react";

function BotSpecs({ bot, goBack, enlistBot }) {
  if (!bot) return <p>No bot selected.</p>;

  return (
    <div className="bot-specs-container">
      <h2>{bot.name}</h2>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>

      <button onClick={goBack}>Back</button>
      <button onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
