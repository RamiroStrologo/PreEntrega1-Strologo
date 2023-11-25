import axios from "axios";

export default async function getGameById(gameId) {
  const gamesFetch = await axios.get("/json/videojuegos.json");
  let foundGame = [];
  Object.keys(gamesFetch.data).forEach((consoleKey) => {
    const game = gamesFetch.data[consoleKey].find(
      (game) => game.id === gameId.gameId
    );
    if (game) {
      foundGame = game;
    }
  });
  return foundGame;
}
