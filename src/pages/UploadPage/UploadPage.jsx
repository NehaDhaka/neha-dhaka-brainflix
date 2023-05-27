import thumbnailImage from "../../assets/Images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/Icons/publish.svg";
import "./UploadPage.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function UploadPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  function handleOnSubmit(event) {
    setIsSubmitted((prev) => !prev);
    event.preventDefault();
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }

  return (
    <section className="upload">
      <hr className="upload__divider" />
      <div className={`upload__${isSubmitted ? "pop-up" : "hide"}`}>
        <p className="upload__pop-text">
          Form has been succesfully submitted. You will be redirected to the
          home page in 4 seconds..
        </p>
      </div>
      <div className={`upload__content ${isSubmitted && "upload__blur"}`}>
        <h1 className="upload__title">Upload Video</h1>
        <form onSubmit={handleOnSubmit} className="upload__form">
          <div className="upload__form-container">
            <div className="upload__thumbnail-container">
              <p className="upload__thumbnail-title">VIDEO THUMBNAIL</p>
              <img
                className="upload__thumbnail-img"
                src={thumbnailImage}
                alt="video thumbnail"
              />
            </div>
            <div className="upload__form-fields">
              <div className="upload__form-field">
                <label className="upload__form-label" htmlFor="title">
                  TITLE YOUR VIDEO
                </label>
                <input
                  className="upload__form-input"
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Add a title to your video"
                />
              </div>
              <div className="upload__form-field">
                <label className="upload__form-label" htmlFor="description">
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="upload__form-input upload__form-input--textarea"
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="upload__btn-container">
            <button className="upload__upload-btn">
              <img src={uploadIcon} alt="upload icon" />
              <span className="upload__btn-text">PUBLISH</span>
            </button>

            <div className="upload__cancel-btn">
              <span className="upload__cancel-text">CANCEL</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
