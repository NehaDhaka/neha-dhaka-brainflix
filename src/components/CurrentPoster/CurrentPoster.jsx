import "./CurrentPoster.scss";

export default function CurrentPoster({ currentPoster }) {
  return (
    <section className="current-poster">
      <video
        className="current-poster__video"
        poster={currentPoster.image}
        controls
        width="100%"
      ></video>
    </section>
  );
}
