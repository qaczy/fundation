import React from 'react'
import { Navbar, BlogContent, Footer } from "../components";

const BlogPostPage = ({ blogs }) => {

	return (
		<>
			<Navbar />
			<BlogContent blogs={blogs ? blogs : ""} />
			<Footer />
		</>
	)
}

export default BlogPostPage