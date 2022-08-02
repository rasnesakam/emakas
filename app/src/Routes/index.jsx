import { Routes, Route } from "react-router-dom";

import { Blogs } from "../../Routes/Blogs";
import { About } from "../../Routes/About";
import { Home } from "../../Routes/Home";
import { Page } from "../../Routes/Blogs/Page";
import { Admin } from "../../Routes/Admin";

export const RoutedContent = () => {
  return (
    <div className="container mx-auto p-5">
        <Routes>
            <Route path="/" element={<Home />}>
				<Route path="admin" element={Admin}>
					<Route path="post" element={}/>
				</Route>
				<Route path="blog" element={<Blogs />} />
				<Route path="page">
					<Route path=":uri" element={<Page />} />
				</Route>
				<Route path="about" element={<About />} />
			</Route>
        </Routes>
    </div>
  );
};
