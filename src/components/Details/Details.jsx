import DetailsCurrent from "../DetailsCurrent/DetailsCurrent";
import DetailsNext from "../DetailsNext/DetailsNext";
import "./Details.scss";

export default function Details({
  videoList,
  currentPosterId,
  updateCurrentVideo,
}) {
  return (
    <section className="details">
      <DetailsCurrent currentPosterId={currentPosterId} />
      <DetailsNext
        // updateCurrentVideo={updateCurrentVideo}
        // videoList={videoList}
        currentPosterId={currentPosterId}
      />
    </section>
  );
}
