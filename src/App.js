import Header from "./components/Header/Header";
import MainC from "./components/MainC/MainC";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { api } from "../src/utils/api";

function App() {
  console.log(api);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<MainC />} />
            <Route path="/upload" element={<UploadVideo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
