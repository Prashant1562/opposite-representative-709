const mongoose = require("mongoose");
const gameSchema = new mongoose.Schema({
  players: {
    type: [
      { name: String, cards: [Number], score: Number },
      { name: String, cards: [Number], score: Number },
    ],
    required: true,
  },
  board: { type: [Number], default: [] },
  currentPlayer: { type: String, default: "0" },
});
module.exports = mongoose.model("Game", gameSchema);
