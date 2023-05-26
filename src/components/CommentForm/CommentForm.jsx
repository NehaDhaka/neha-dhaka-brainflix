import userImage from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import "./CommentForm.scss";

export default function CommentForm() {
  return (
    <div className="details__comment-new">
      <div className="details__form-container">
        <img className="details__user-img" src={userImage} alt="Mohan Muruge" />
        <form className="details__form">
          <div className="details__form-field">
            <label className="details__form-label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              class="details__form-input"
              type="text"
              name="comment"
              id="comment"
              placeholder="Add a new comment"
              rows="7"
            ></textarea>
          </div>
          <button className="details__form-btn">
            <img src={commentIcon} />
            <span className="details__btn-txt">COMMENT</span>
          </button>
        </form>
      </div>
    </div>
  );
}
