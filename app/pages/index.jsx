import { Routes, Route } from "react-router-dom";
import { MediumBlogs } from "./MediumBlog";
import { Blogs } from "./Blogs";
import { About } from "./About";
import { Home } from "./Home";
import { Page } from "./Blogs/Page";
import { Admin } from "./Admin";
import { Post } from "./Admin/Post";
import { Unauthorized } from "./Unauthorized";
import { NotFound } from "./NotFound";
import { Login } from "./Admin/Login";
import {About as EditAbout} from "./Admin/About"

export const RoutedContent = () => {

	
	return (
		<div className="container mx-auto p-5">
			Hi Mom
		</div>
	);
};
