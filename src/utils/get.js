import axios from "axios";
import { videosURL, apiKey } from "./api";

export function getAxios(currentPosterId, setActiveVideo) {
  axios
    .get(`${videosURL}/${currentPosterId}/?api_key=${apiKey}`)
    .then((response) => setActiveVideo(response.data));
}
