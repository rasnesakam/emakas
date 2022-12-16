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
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"

export default function Index(){
	return (
		<Home />
	);
};
