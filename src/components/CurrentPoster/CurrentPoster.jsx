import "./CurrentPoster.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { videosURL, apiKey } from "../../utils/api";

// This component renders the poster of the active video. This component require one prop(currentPosterId) which is the id of the active video.

export default function CurrentPoster({ currentPosterId }) {
  const [currentPoster, setCurrentPoster] = useState(null);

  useEffect(() => {
    axios
      .get(`${videosURL}/${currentPosterId}?api_key=${apiKey}`)
      .then((response) => setCurrentPoster(response.data));
  }, [currentPosterId]);

  if (!currentPoster) {
    return <h1>Loading..</h1>;
  }
  return (
    <section className="current-poster">
      <video
        className="current-poster__video"
        poster={currentPoster.image}
        controls
        width="100%"
      ></video>
    </section>
  );
}
