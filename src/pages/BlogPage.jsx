/** @format */

import { Navbar, Blog, Footer } from "../components";
import "../App.css";

function BlogPage({ blogs }) {

	return (
		<>
			<Navbar />
			<Blog blogs={blogs ? blogs : ""} />
			<Footer />
		</>
	);
}

export default BlogPage;
