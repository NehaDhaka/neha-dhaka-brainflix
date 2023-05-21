import DetailsCommentNew from "../DetailsCommentNew/DetailsCommentNew";
import DetailsInfo from "../DetailsInfo/DetailsInfo";
import DetailsCommentOld from "../DetailsCommentOld/DetailsCommentOld";
import "./DetailsCurrent.scss";

export default function DetailsCurrent({ currentPoster }) {
  return (
    <div className="details__current">
      <DetailsInfo currentPoster={currentPoster} />
      <DetailsCommentNew />
      <DetailsCommentOld currentPoster={currentPoster} />
    </div>
  );
}
