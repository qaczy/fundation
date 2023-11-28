/** @format */

import { HomePage, BlogPage, BlogPostPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
function App() {
	let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*')
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error!</p>
	return (
		<>
			<Routes>
				<Route path='/' element={<BlogPage blogs={data ? data : ""} />}></Route>
				<Route path='/blog/:title' element={<BlogPostPage blogs={data ? data : ""} />}></Route>
			</Routes>
		</>
	);
}

export default App;
