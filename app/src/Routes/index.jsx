import { Routes, Route } from "react-router-dom";
import { MediumBlogs } from "./MediumBlog";
import { Blogs } from "./Blogs";
import { About } from "./About";
import { Home } from "./Home";
import { Page } from "./Blogs/Page";
import { Admin } from "./Admin";
import { Post } from "./Admin/Post";

export const RoutedContent = () => {

	
	return (
		<div className="container mx-auto p-5">
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/admin" element={<Admin />}>
					<Route path="post" element={<Admin />} />
				</Route>
				
				<Route path="/blog" element={<MediumBlogs />} />
				
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
};
