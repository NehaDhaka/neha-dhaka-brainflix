import ActiveVideo from "../../components/ActiveVideo/ActiveVideo";
import AdditionalContent from "../../components/AdditionalContent/AdditionalContent";
import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getAxios } from "../../utils/get";

const baseURL = process.env.REACT_APP_BASE_URL;

export default function HomePage({ videoList }) {
  const posterId = useParams();
  const defaultId = videoList[0].id;
  const [activeVideo, setActiveVideo] = useState(null);

  const currentPosterId = posterId.id || defaultId;

  useEffect(() => {
    getAxios(currentPosterId, setActiveVideo);
  }, [currentPosterId]);

  if (activeVideo === null) {
    return <h1 className="error">Loading..</h1>;
  }

  const id = videoList.find((video) => video.id === currentPosterId);
  if (!id) {
    return (
      <h1 className="error">
        Sorry, the video you are looking for does not exist..
      </h1>
    );
  }

  const filteredList = videoList.filter(
    (video) => video.id !== currentPosterId
  );

  function handleOnClick(commentId) {
    console.log(commentId + " deleted");
    axios
      .delete(`${baseURL}videos/${currentPosterId}/comments/${commentId}/`)
      .then(() => {
        getAxios(currentPosterId, setActiveVideo).catch((error) => {
          console.log(error);
        });
      });
  }

  function handleOnSubmit(event, commentData) {
    event.preventDefault();

    axios
      .post(`${baseURL}videos/${currentPosterId}/comments/`, {
        comment: commentData,
      })
      .then(() => {
        getAxios(currentPosterId, setActiveVideo);
      })
      .catch((error) => {
        console.log(error);
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
