export default async function getGameById(gameId) {
  const gamesFetch = await fetch("/json/videojuegos.json");
  const data = await gamesFetch.json();
  let foundGame = [];
  Object.keys(data).forEach((consoleKey) => {
    const game = data[consoleKey].find((game) => game.id === gameId.gameId);
    if (game) {
      foundGame = game;
    }
  });
  return foundGame;
}
