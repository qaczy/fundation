/** @format */

import React from "react";
import placeholder from "../assets/placeholder.png";
function Blog() {
	const blogPosts = [
		{
			id: 1,
			title: "Title 1",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus minima rerum repudiandae hic similique placeat asperiores doloremque vitae facilis labore consectetur recusandae ab, sequi, qui iusto praesentium delectus vero.",
			thumb: "https://freefolkagency.com/wp-content/uploads/2022/09/placeholder.png",
		},
		{
			id: 2,
			title: "Title 2",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus minima rerum repudiandae hic similique placeat asperiores doloremque vitae facilis labore consectetur recusandae ab, sequi, qui iusto praesentium delectus vero.",
			thumb: "https://freefolkagency.com/wp-content/uploads/2022/09/placeholder.png",
		},
		{
			id: 3,
			title: "Title 3",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus minima rerum repudiandae hic similique placeat asperiores doloremque vitae facilis labore consectetur recusandae ab, sequi, qui iusto praesentium delectus vero.",
			thumb: "https://freefolkagency.com/wp-content/uploads/2022/09/placeholder.png",
		},
	];

	return (
		<div className="w-full bg-[#f9f9f9] py-[50px]">
			<div className="max-w-[1240px] mx-auto">
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
					{blogPosts.map((blogPost) => (
						<div
							className="bg-white rounded-xl overflow-hidden drop-shadow-md"
							key={blogPost.id}
						>
							<img
								className="h-56 w-full object-cover"
								src={blogPost.thumb}
							/>
							<div className="p-8">
								<h3 className="font-bold text-2xl my-1">
									{blogPost.title}
								</h3>
								<p className="text-gray-600 text-xl">
									{blogPost.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Blog;
