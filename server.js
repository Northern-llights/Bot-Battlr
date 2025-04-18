const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Endpoint to delete a bot
server.delete("/bots/:id", (req, res) => {
  const { id } = req.params;
  const bots = router.db.get("bots").value();
  const updatedBots = bots.filter(bot => bot.id !== parseInt(id));
  router.db.set("bots", updatedBots).write();
  res.json({ message: "Bot deleted successfully" });
});

server.listen(3001, () => {
  console.log("JSON Server running on port 3001");
});
