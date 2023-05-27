import userImage from "../../assets/Images/Mohan-muruge.jpg";
import commentIcon from "../../assets/Icons/add_comment.svg";
import "./CommentForm.scss";
import { useState } from "react";

//Component handles form submission and validation

export default function CommentForm({ handleOnSubmit }) {
  const [comment, setComment] = useState("");
  const [isValid, setisValid] = useState(true);

  function handleChange(event) {
    setComment(event.target.value);
  }

  return (
    <form
      onSubmit={(event) => {
        if (!comment) {
          event.preventDefault();
          setisValid(false);
        } else {
          setisValid(true);
          handleOnSubmit(event, comment, isValid);
          setComment("");
        }
      }}
      className="comment-form"
    >
      <img
        className="comment-form__user-img"
        src={userImage}
        alt="Mohan Muruge"
      />
      <div className="comment-form__container">
        <div className="comment-form__field">
          <label className="comment-form__label" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className={`comment-form__input ${!isValid && "comment-form__err"}`}
            onChange={handleChange}
            type="text"
            name="comment"
            id="comment"
            placeholder="Add a new comment"
            value={comment}
            rows="7"
          ></textarea>
        </div>
        <button className="comment-form__btn">
          <img src={commentIcon} />
          <span className="comment-form__btn-txt">COMMENT</span>
        </button>
      </div>
    </form>
  );
}
