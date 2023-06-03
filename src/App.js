import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import { useEffect, useState } from "react";

const baseURL = process.env.REACT_APP_BASE_URL;

function App() {
  const [videoList, setVideoList] = useState(null);
  const [render, setRender] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseURL}videos`)
      .then((response) => setVideoList(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, [render]);

  if (!videoList) {
    return <h1>Loading..</h1>;
  }

  function handleOnSubmit(event, formData, setIsSubmitted, setIsValid) {
    event.preventDefault();

    if (!formData.title || !formData.description) {
      setIsValid(false);
      return;
    }

    setIsSubmitted((prev) => !prev);

    const { title, description, image } = formData;
    const data = new FormData();
    data.append("image", image);
    data.append("title", title);
    data.append("description", description);

    axios
      .post(`${baseURL}videos`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        setRender((prev) => !prev);
      });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomePage videoList={videoList} />} />
          <Route path="/:id" element={<HomePage videoList={videoList} />} />
          <Route
            path="/upload"
            element={<UploadPage handleOnSubmit={handleOnSubmit} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
