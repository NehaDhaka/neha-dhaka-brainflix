import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

export function getAxios(currentPosterId, setActiveVideo) {
  axios
    .get(`${baseURL}videos/${currentPosterId}`)
    .then((response) => setActiveVideo(response.data))
    .catch((error) => {
      console.log(error);
    });
}
