import "./DetailsCommentOld.scss";
import { formatTimeStamp } from "../../utils.js";

export default function ({ currentPoster }) {
  let timeContent = formatTimeStamp(currentPoster.timestamp);

  return (
    <div className="details__old-container">
      <ul className="details__comments-old">
        {currentPoster.comments.map((comment) => {
          return (
            <li key={comment.id} className="details__comment">
              <div className="details__placeholder-container">
                <div className="details__placeholder"></div>
              </div>
              <div className="details__comment-content">
                <div className="details__comment-info">
                  <span className="details__comment-username">
                    {comment.name}
                  </span>
                  <span className="details__comment-date">{timeContent}</span>
                </div>
                <p className="details__comment-text">{comment.comment}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="details__comments-divider" />
    </div>
  );
}
