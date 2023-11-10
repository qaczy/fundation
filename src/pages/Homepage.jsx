/** @format */

import { Navbar, Blog, Footer } from "../components";
import "../App.css";

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
