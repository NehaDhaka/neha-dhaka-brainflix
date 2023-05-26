import CommentForm from "../CommentForm/CommentForm";
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";
import CurrentVideoComments from "../CurrentVideoComments/CurrentVideoComments";
import "./DetailsCurrent.scss";

export default function DetailsCurrent({ currentPosterId }) {
  return (
    <div className="details__current">
      <CurrentVideoDetails currentPosterId={currentPosterId} />
      <CommentForm />
      <CurrentVideoComments currentPosterId={currentPosterId} />
    </div>
  );
}
