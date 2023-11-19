export async function getProducts(consola) {
  const gamesFetch = await fetch("../json/videojuegos.json");
  const data = await gamesFetch.json();
  switch (consola) {
    case "ps3":
      return data.ps3.map((game) => ({ ...game }));
    case "ps4":
      return data.ps4.map((game) => ({ ...game }));
    case "xone":
      return data.xone.map((game) => ({ ...game }));
    default:
      return null;
  }
}
export async function getConsolaInfo(consola) {
  const gamesFetch = await fetch("../json/videojuegos.json");
  const data = await gamesFetch.json();
  switch (consola) {
    case "ps3":
      return data.logoPS3[0];
    case "ps4":
      return data.logoPS4[0];
    case "xone":
      return data.logoXONE[0];
    default:
      return null;
  }
}
const tiendaJs = {
  getProducts,
  getConsolaInfo,
};
export default tiendaJs;
