import React, { useEffect, useState } from "react";
import getIframe from "./iframeJs";

export default function Iframe({ id }) {
  const [iframe, setIframe] = useState();
  useEffect(() => {
    getIframe(id).then((response) => {
      setIframe(response);
    });
  }, [id]);
  return (
    <>
      <iframe
        width="800"
        height="300"
        src={`//www.youtube.com/embed/${id.gameId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen=""
      ></iframe>
    </>
  );
}
