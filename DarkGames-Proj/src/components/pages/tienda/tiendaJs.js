export default async function getProducts() {
  const gamesFetch = await fetch("json/videojuegos.json");
  const data = await gamesFetch.json();
  console.log("Contenido de games:", data);
  const gamesFilter = data.ps3.filter((game) => game);
  return gamesFilter;
}
