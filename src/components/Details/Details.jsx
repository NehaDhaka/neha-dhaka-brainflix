// import DetailsCurrent from "../DetailsCurrent/DetailsCurrent";
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import CurrentVideoComments from "../CurrentVideoComments/CurrentVideoComments";
import VideoList from "../VideoList/VideoList";
import "./Details.scss";

// This component structures the layout of the main content of the page(except current video poster). This component require one prop(currentPosterId) which is the id of the active video.

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
