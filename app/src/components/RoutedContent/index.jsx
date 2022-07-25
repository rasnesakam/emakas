import { Routes, Route } from "react-router-dom";

import { Blogs } from "../../views/Blogs";
import { About } from "../../views/About";
import { Home } from "../../views/Home";
import { Page } from "../../views/Page";

export const RoutedContent = () => {
  return (
    <div className="container mx-auto p-5">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="page">
              <Route path=":uri" element={<Page />} />
            </Route>
            <Route path="about" element={<About />} />
        </Routes>
    </div>
  );
};
