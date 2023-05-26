import "./VideoList.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { videosURL, apiKey } from "../../utils/api";
import { Link } from "react-router-dom";

// This component renders the list of the filtered videos.  This component require one prop(currentPosterId) which is the id of the active video.

export default function VideoList({ currentPosterId }) {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    axios
      .get(`${videosURL}/?api_key=${apiKey}`)
      .then((response) => setVideoList(response.data));
  }, []);

  if (!videoList) {
    return <h1>Loading..</h1>;
  }

  const filteredList = videoList.filter(
    (video) => video.id !== currentPosterId
  );
  return (
    <div className="details__next">
      <h5 className="details__next-title">NEXT VIDEOS</h5>
      <ul className="details__next-list">
        {filteredList.map((video) => {
          return (
            <Link className="details__link-container" to={`/${video.id}`}>
              <li key={video.id} className="details__next-item">
                <img
                  className="details__next-preview"
                  src={video.image}
                  alt="video preview"
                />
                <div className="details__next-info">
                  <span className="details__next-name">{video.title}</span>
                  <span className="details__next-author">{video.channel}</span>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
