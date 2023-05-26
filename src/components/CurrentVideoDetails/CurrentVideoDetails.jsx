import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import "./CurrentVideoDetails.scss";
import { formatTimeStamp } from "../../utils/format";
import { useState, useEffect } from "react";
import axios from "axios";
import { videosURL, apiKey } from "../../utils/api";

// This component renders the description and stats of the active video. This component require one prop(currentPosterId) which is the id of the active video.

export default function CurrentVideoDetails({ currentPosterId }) {
  const [currentPoster, setCurrentPoster] = useState(null);

  useEffect(() => {
    axios
      .get(`${videosURL}/${currentPosterId}?api_key=${apiKey}`)
      .then((response) => setCurrentPoster(response.data));
  }, [currentPosterId]);
  if (!currentPoster) {
    return <h1>Loading..</h1>;
  }

  let timeContent = formatTimeStamp(currentPoster.timestamp);

  return (
    <div key={currentPoster.id} className="details__info">
      <h1 className="details__title">{currentPoster.title}</h1>
      <div className="details__current-stats">
        <div className="details__current-left">
          <span className="details__current-author">
            {`By ${currentPoster.channel}`}
          </span>
          <span className="details__current-date">{timeContent}</span>
        </div>
        <div className="details__current-right">
          <div className="details__current-views">
            <img
              className="details__view-icon"
              src={viewsIcon}
              alt="View Icon"
            />
            <span className="details__current-view">{currentPoster.views}</span>
          </div>
          <div className="details__current-likes">
            <img
              className="details__like-icon"
              src={likesIcon}
              alt="View Icon"
            />
            <span className="details__current-like">{currentPoster.likes}</span>
          </div>
        </div>
      </div>
      <hr className="details__divider"></hr>
      <p className="details__current-description">
        {currentPoster.description}
      </p>
      <span className="details__comments-number">
        {`${currentPoster.comments.length} comment${
          currentPoster.comments.length > 1 ? "s" : ""
        }`}
      </span>
    </div>
  );
}
