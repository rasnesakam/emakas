import { Routes, Route } from "react-router-dom";

import { Blogs } from "../../views/Blogs";
import { About } from "../../views/About";
import { Home } from "../../views/Home";

export const RoutedContent = () => {
  return (
    <div className="container p-5">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blogs />}>
                <Route path=":uri" element={<Blogs />} />
            </Route>
            <Route path="about" element={<About />} />
        </Routes>
    </div>
  );
};
