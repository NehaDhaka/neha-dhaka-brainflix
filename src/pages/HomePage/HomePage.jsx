import CurrentPoster from "../../components/CurrentPoster/CurrentPoster";
import Details from "../../components/Details/Details";
import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../utils/api";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const posterId = useParams();
  const [defaultPosterId, setDefaultPosterId] = useState(null);

  useEffect(() => {
    axios.get(api).then((response) => setDefaultPosterId(response.data[0].id));
  }, []);

  if (!defaultPosterId) {
    return <h1>Loading..</h1>;
  }

  const currentPosterId = posterId.id || defaultPosterId;

  return (
    <main className="main">
      <CurrentPoster currentPosterId={currentPosterId} />
      <Details currentPosterId={currentPosterId} />
    </main>
  );
}
