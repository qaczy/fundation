import React from 'react'
import placeholder from '../assets/placeholder.png'
import { useParams } from 'react-router-dom'


const BlogContent = (blogs) => {
	console.log('BlogContent.jsx')
	console.log(blogs)
	const { title } = useParams()

	let postContent = postContents.filter(postContent => postContent.title == title)
	postContent = postContent[0]

	return (
		<div className="w-full pb-10 bg-slate-200 py-[100px]">
			<div className="mx-auto max-w-[1240px]">
				<div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
					<div className="col-span-2 gap-x-8 gap-y-8">

						<img className=' h-64 w-full object-cover rounded-t-3xl' src={postContent.thumb} alt="" />
						<h1 className='font-bold text-2xl my-1 pt-5'>{postContent.title}</h1>
						<div className="pt-5">
							<p>{postContent.desc}</p>
						</div>

					</div>
					<div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 h-[250px]'>
						<div>
							<div className="w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-64">
								<img src={postContent.authorThumb} alt="Autor posta" className="p-2 w-32 rounded-full mx-auto" />
								<h1 className="font-bold text-2xl text-center text-grey-900 pt-3">{postContent.authorName}</h1>
								<p className="text-center text-grey-900 font-medium">
									{postContent.authorJob}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogContent;

