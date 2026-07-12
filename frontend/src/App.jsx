import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SingleBlog from "./pages/SingleBlog";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UploadBlog from "./pages/UploadBlog";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path="/login" element={<Login />} />
        <Route path='/blog/:blogId' element={<SingleBlog />} />
        <Route path='/uploadBlog' element={<UploadBlog />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;

