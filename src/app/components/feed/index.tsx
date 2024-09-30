"use client"

import { EllipsisVertical, Heart, MessageSquareDot, Send } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import Comments from '../comments'
import feedStyle from "./index.module.css"

const Feed = () => {

	const [isCommentOpen, setIsCommentOpen] = useState(false);

	const toggleComments = () => {
		setIsCommentOpen(!isCommentOpen);
	}

	return (
		<div className='w-full h-[90vh] justify-center items-center flex relative'>
			<div className='w-[50%] h-[100%] flex-col border shadow-md divide-y-2 rounded-3xl border-t-2 border-black/30'>
				{/* user details */}
				<div className='w-full h-[15%] flex items-center px-6 bg-slate-100 rounded-tr-3xl rounded-tl-3xl'>
					<div className='h-[80%] aspect-square rounded-full'>
						<Image
							src="/profile_pic.webp"
							alt='profile image'
							width={100}
							height={100}
							className='w-[100%] h-[100%] rounded-full border-[5px] border-blue-300'
						/>
					</div>
					<div className='flex justify-between px-4 items-center w-[100%] h-[100%]'>
						<div className='w-[90%] h-[100%]  flex flex-col justify-center px-4'>
							<h3 className='font-bold text-lg'>Georgie Lobko</h3>
							<span className='font-semibold text-sm text-black/50'>2 hours ago</span>
						</div>
						<div className='w-[10%] h-[100%] flex justify-center items-center cursor-pointer'>
							<EllipsisVertical />
						</div>
					</div>
				</div>

				{/* user post */}

				<div className='w-[100%] h-[70%]'>
					<Image
						src="/post_image.jpg"
						alt='post image'
						width={300}
						height={300}
						className='w-[100%] h-[100%] rounded-md'
					/>
				</div>

				{/* interactions */}

				<div className='w-[100%] h-[15%] flex justify-start items-center px-8 gap-8 bg-slate-100 rounded-br-3xl rounded-bl-3xl'>
					<div className='flex gap-2 justify-center items-center cursor-pointer'>
						<Heart />
						<span className='text-sm font-medium'>6000</span>
					</div>
					<div className={`flex gap-2 justify-center items-center cursor-pointer ${feedStyle.comment_tooltip}`} onClick={toggleComments}>
						<MessageSquareDot />
						<span className='text-sm font-medium'>6000</span>
					</div>
					<div className='flex gap-2 cursor-pointer'>
						<Send />
					</div>
				</div>
			</div>


			{/* comments */}

			{
				isCommentOpen && <Comments />
			}

		</div>
	)
}

export default Feed