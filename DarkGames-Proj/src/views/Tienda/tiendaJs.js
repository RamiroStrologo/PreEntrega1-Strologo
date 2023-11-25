import axios from "axios";

export async function getProducts(consola) {
  const gamesFetch = await axios.get("../json/videojuegos.json");
  switch (consola) {
    case "ps3":
      return gamesFetch.data.ps3.map((game) => ({ ...game }));
    case "ps4":
      return gamesFetch.data.ps4.map((game) => ({ ...game }));
    case "xone":
      return gamesFetch.data.xone.map((game) => ({ ...game }));
    default:
      return null;
  }
}
export async function getConsolaInfo(consola) {
  const gamesFetch = await axios.get("../json/videojuegos.json");
  switch (consola) {
    case "ps3":
      return gamesFetch.data.logoPS3[0];
    case "ps4":
      return gamesFetch.data.logoPS4[0];
    case "xone":
      return gamesFetch.data.logoXONE[0];
    default:
      return null;
  }
}
const tiendaJs = {
  getProducts,
  getConsolaInfo,
};
export default tiendaJs;
