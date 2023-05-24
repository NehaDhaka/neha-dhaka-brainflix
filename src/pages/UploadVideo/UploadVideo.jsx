import thumbnailImage from "../../assets/Images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";

export default function UploadVideo() {
  return (
    <section className="upload-video">
      <h1 className="upload-video__title">Upload Video</h1>
      <form className="upload-video__form">
        <div className="upload-video__form-container">
          <div className="upload-video__thumbnail">
            <p className="upload-video__thumbnail-title">VIDEO THUMBNAIL</p>
            <img src={thumbnailImage} alt="video thumbnail" />
          </div>
          <div className="upload-video__form-fields">
            <div className="upload-video__form-field">
              <label className="upload-video__form-label" htmlFor="">
                TITLE YOUR VIDEO
              </label>
              <input
                name="title"
                type="text"
                placeholder="Add a title to your video"
              />
            </div>
            <div className="upload-video__form-field">
              <label className="upload-video__form-label" htmlFor="">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                name="description"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
        </div>
        <button className="upload-video__cancel-btn">Cancel</button>
        <button className="upload-video__upload-btn">
          <img src={uploadIcon} alt="upload icon" />
          <span className="upload-video__btn-text">Upload</span>
        </button>
      </form>
    </section>
  );
}
