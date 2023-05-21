import DetailsCurrent from "../DetailsCurrent/DetailsCurrent";
import DetailsNext from "../DetailsNext/DetailsNext";
import "./Details.scss";

export default function Details({
  videoList,
  currentPoster,
  updateCurrentVideo,
}) {
  return (
    <section className="details">
      <DetailsCurrent currentPoster={currentPoster} />
      <DetailsNext
        updateCurrentVideo={updateCurrentVideo}
        videoList={videoList}
      />
    </section>
  );
}
