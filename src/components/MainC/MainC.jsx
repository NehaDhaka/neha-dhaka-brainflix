import CurrentPoster from "../CurrentPoster/CurrentPoster";
import Details from "../Details/Details";
import "./MainC.scss";
import videoList from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import { useState } from "react";

export default function Main() {
  const [currentPoster, setCurrentPoster] = useState(videoDetails[0]);

  const filteredList = videoList.filter((video) => {
    return video.id !== currentPoster.id;
  });

  // const updateCurrentVideo = function (id) {
  //   const updatedCurrentPoster = videoDetails.find((video) => {
  //     return id === video.id;
  //   });
  //   setCurrentPoster(updatedCurrentPoster);
  };
  return (
    <main className="main">
      <CurrentPoster currentPoster={currentPoster} />
      <Details
        updateCurrentVideo={updateCurrentVideo}
        videoList={filteredList}
        currentPoster={currentPoster}
      />
    </main>
  );
}
