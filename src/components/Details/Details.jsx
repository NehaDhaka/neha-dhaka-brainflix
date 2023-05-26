// import DetailsCurrent from "../DetailsCurrent/DetailsCurrent";
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";
import VideoList from "../VideoList/VideoList";
import "./Details.scss";

export default function Details({ currentPosterId }) {
  return (
    <section className="details">
      <div className="details__current">
        <CurrentVideoDetails currentPosterId={currentPosterId} />
        <CommentForm />
        <CurrentVideoComments currentPosterId={currentPosterId} />
      </div>
      <VideoList currentPosterId={currentPosterId} />
    </section>
  );
}
