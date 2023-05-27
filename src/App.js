import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { videosURL, apiKey } from "../src/utils/api";

function App() {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    axios
      .get(`${videosURL}/?api_key=${apiKey}`)
      .then((response) => setVideoList(response.data));
  }, []);

  if (!videoList) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<HomePage videoList={videoList} />} />
            <Route path="/:id" element={<HomePage videoList={videoList} />} />
            <Route path="/upload" element={<UploadPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
