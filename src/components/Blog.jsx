/** @format */

import React from "react";
import placeholder from "../assets/placeholder.png";
import { Link, useParams } from "react-router-dom";

const Blog = ({ blogs }) => {
	// console.log({ blogs })
	return (
		<div className="w-full bg-[#f9f9f9] py-[100px]">
			<div className="max-w-[1240px] mx-auto">
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
					{blogs.data.map((blogPost) => (
						<Link to={`/blog/${blogPost.id}`}>
							<div
								className="bg-white rounded-xl overflow-hidden drop-shadow-md"
								key={blogPost.id}
							>
								<img
									className="h-56 w-full object-cover"
									src={`http://localhost:1337${blogPost.attributes.BlogImage.data.attributes.url}`}
								/>
								<div className="p-8">
									<h3 className="font-bold text-2xl my-1">
										{blogPost.attributes.BlogTItle}
									</h3>
									<p className="text-gray-600 text-xl">
										{blogPost.attributes.BlogDesc[0].children[0].text}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>

			</div >
		</div >

	);
}

export default Blog;
