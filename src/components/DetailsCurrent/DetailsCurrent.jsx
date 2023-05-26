import DetailsCommentNew from "../DetailsCommentNew/DetailsCommentNew";
import DetailsInfo from "../DetailsInfo/DetailsInfo";
import DetailsCommentOld from "../DetailsCommentOld/DetailsCommentOld";
import "./DetailsCurrent.scss";

export default function DetailsCurrent({ currentPosterId }) {
  return (
    <div className="details__current">
      <DetailsInfo currentPosterId={currentPosterId} />
      <DetailsCommentNew />
      <DetailsCommentOld currentPosterId={currentPosterId} />
    </div>
  );
}
