export default function Iframe({ id }) {
  return (
    <>
      <iframe
        width="800"
        height="300"
        src={`//www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen=""
      ></iframe>
    </>
  );
}
