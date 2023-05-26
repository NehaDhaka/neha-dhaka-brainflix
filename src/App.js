import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
