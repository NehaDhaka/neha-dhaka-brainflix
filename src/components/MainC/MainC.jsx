import CurrentPoster from "../CurrentPoster/CurrentPoster";
import Details from "../Details/Details";
import "./MainC.scss";
import videoList from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../utils/api";
import { useParams } from "react-router-dom";

export default function MainC() {
  const posterId = useParams();
  const [defaultPosterId, setDefaultPosterId] = useState(null);

  useEffect(() => {
    axios.get(api).then((response) => setDefaultPosterId(response.data[0].id));
  }, []);

  if (!defaultPosterId) {
    return <h1>Loading..</h1>;
  }

  const currentPosterId = posterId.id || defaultPosterId;

  // console.log(currentPosterId);

  // const filteredList = videoList.filter((video) => {
  //   return video.id !== currentPoster.id;
  // });

  // const updateCurrentVideo = function (id) {
  //   const updatedCurrentPoster = videoDetails.find((video) => {
  //     return id === video.id;
  //   });
  //   setCurrentPoster(updatedCurrentPoster);
  // };
  return (
    <main className="main">
      {<CurrentPoster currentPosterId={currentPosterId} />}
      {
        <Details
          // updateCurrentVideo={updateCurrentVideo}
          // videoList={filteredList}
          currentPosterId={currentPosterId}
        />
      }
    </main>
  );
}
