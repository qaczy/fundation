import React from 'react'
import { Navbar, BlogContent, Footer } from "../components";

function BlogContentPage() {
	return (
		<>
			<Navbar />
			<div className="spacer pt-20"></div>
			<BlogContent />
			<Footer />
		</>
	)
}

export default BlogContentPage