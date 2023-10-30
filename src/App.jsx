/** @format */

import Navbar from "./components/Navbar.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<div className="spacer pt-20"></div>
			<Blog />
			<Footer />
		</>
	);
}

export default App;
