import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

import BlogDetail from "./pages/BlogDetails";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Saved" element={<Saved />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
};

export default AppRoutes;
