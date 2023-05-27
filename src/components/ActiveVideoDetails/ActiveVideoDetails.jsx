import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import "./ActiveVideoDetails.scss";
import { formatTimeStamp } from "../../utils/format";

export default function ActiveVideoDetails({ activeVideo }) {
  let timeContent = formatTimeStamp(activeVideo.timestamp);

  return (
    <div key={activeVideo.id} className="video-description">
      <h1 className="video-description__title">{activeVideo.title}</h1>
      <div className="video-description__stats">
        <div className="video-description__stat ">
          <span className="video-description__bold-text">
            {`By ${activeVideo.channel}`}
          </span>
          <span className="video-description__date">{timeContent}</span>
        </div>
        <div className="video-description__stat video-description__stat--right">
          <div className="video-description__numbers ">
            <img
              className="video-description__icon "
              src={viewsIcon}
              alt="View Icon"
            />
            <span className="video-description__view">{activeVideo.views}</span>
          </div>
          <div className="video-description__numbers ">
            <img
              className="video-description__icon"
              src={likesIcon}
              alt="View Icon"
            />
            <span className="video-description__like">{activeVideo.likes}</span>
          </div>
        </div>
      </div>
      <hr className="video-description__divider"></hr>
      <p className="video-description__content">{activeVideo.description}</p>
      <span className="video-description__bold-text">
        {`${activeVideo.comments.length} comment${
          activeVideo.comments.length > 1 ? "s" : ""
        }`}
      </span>
    </div>
  );
}
