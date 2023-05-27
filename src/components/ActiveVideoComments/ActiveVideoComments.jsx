import "./ActiveVideoComments.scss";
import { formatTimeStamp } from "../../utils/format";

//Component sorts the comments. Displays them based on latest timestamp.
//Has delete comment functionality.
export default function ActiveVideoComments({ activeVideo, handleOnClick }) {
  activeVideo.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  return (
    <div className="comments">
      <ul className="comments__container">
        {activeVideo.map((comment) => {
          return (
            <li key={comment.id} className="comments__content">
              <div className="comments__placeholder-container">
                <div className="comments__placeholder"></div>
              </div>
              <div className="comments__information">
                <div className="comments__data">
                  <span className="comments__username">{comment.name}</span>
                  <span className="comments__date">
                    {formatTimeStamp(comment.timestamp)}
                  </span>
                </div>
                <p className="comments__text">{comment.comment}</p>
                <ion-icon
                  onClick={() => {
                    handleOnClick(comment.id);
                  }}
                  className="comments__btn"
                  name="trash-bin"
                ></ion-icon>
              </div>
            </li>
          );
        })}
      </ul>
      <hr className="comments__divider" />
    </div>
  );
}
