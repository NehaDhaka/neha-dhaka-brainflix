import ActiveVideo from "../../components/ActiveVideo/ActiveVideo";
import AdditionalContent from "../../components/AdditionalContent/AdditionalContent";
import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { videosURL, apiKey } from "../../utils/api";
import { useParams } from "react-router-dom";
import { getAxios } from "../../utils/get";

export default function HomePage({ videoList }) {
  const posterId = useParams();
  const defaultId = videoList[0].id;
  const [activeVideo, setActiveVideo] = useState(null);

  const currentPosterId = posterId.id || defaultId;

  useEffect(() => {
    getAxios(currentPosterId, setActiveVideo);
  }, [currentPosterId]);

  if (!activeVideo) {
    return <h1>Loading..</h1>;
  }

  const filteredList = videoList.filter(
    (video) => video.id !== currentPosterId
  );

  function handleOnClick(commentId) {
    console.log(commentId + " deleted");
    axios
      .delete(
        `${videosURL}/${currentPosterId}/comments/${commentId}/?api_key=${apiKey}`
      )
      .then(() => {
        getAxios(currentPosterId, setActiveVideo);
      });
  }

  function handleOnSubmit(event, commentData) {
    event.preventDefault();

    axios
      .post(`${videosURL}/${currentPosterId}/comments/?api_key=${apiKey}`, {
        name: "Neha Dhaka",
        comment: commentData,
      })
      .then(() => {
        getAxios(currentPosterId, setActiveVideo);
      });
  }

  return (
    <main className="main">
      <ActiveVideo activeVideo={activeVideo.image} />
      <AdditionalContent
        activeVideo={activeVideo}
        filteredList={filteredList}
        handleOnSubmit={handleOnSubmit}
        handleOnClick={handleOnClick}
      />
    </main>
  );
}
