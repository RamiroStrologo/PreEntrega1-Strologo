import axios from "axios";
export default async function getIframe(id) {
  const iframeFetch = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?part=player&id=${id.gameId}&key=AIzaSyA0v1rVjAALrB20vp1hY5MO7ohx395tcuY`
  );

  const iframe = iframeFetch.data.items[0].player.embedHtml;
  return iframe;
}
