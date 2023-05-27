import "./ActiveVideo.scss";

export default function ActiveVideo({ activeVideo }) {
  return (
    <section className="active-video">
      <video
        className="active-video__container"
        poster={activeVideo}
        controls
        width="100%"
      ></video>
    </section>
  );
}
