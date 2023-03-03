const Game = require("../models/gameModel");
exports.playCard = async (req, res) => {
  const { gameId, playerId, cardIndex } = req.body;
  try {
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    if (game.currentPlayer !== playerId) {
      return res.status(403).json({ error: "Not your turn" });
    }
    const card = game.players[playerId].cards[cardIndex];
    if (!card) {
      return res.status(400).json({ error: "Invalid card index" });
    }
    game.players[playerId].cards.splice(cardIndex, 1);
    game.board.push(card);
    game.currentPlayer = playerId === "0" ? "1" : "0";
    await game.save();
    res.json(game);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
