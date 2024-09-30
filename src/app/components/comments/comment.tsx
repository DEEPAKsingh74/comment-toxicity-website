import React from 'react'
import { commentArrTypes } from '.'
import Image from 'next/image'
import { Roboto } from "next/font/google"

const roboto = Roboto({
	subsets: ['latin'],
	weight: '400'
});

const Comment = ({ item }: { item: commentArrTypes }) => {
	return (
		<div className='w-full h-fit flex flex-col mt-2'>
			<div className='flex gap-1'>
				<div className='w-[2rem] h-[2rem]'>
					<Image
						src="/profile_pic.webp"
						alt='profile pic'
						width={200}
						height={200}
						className='rounded-full w-[100%] h-[100%]'
					/>
				</div>
				<div className='flex justify-between px-4 items-center w-full'>
					<span className='text-base font-semibold text-black/90'>{item.name}</span>
					<span className='text-xs font-medium text-black/50'>{item.time}</span>
				</div>
			</div>
			<div className={`text-sm px-[3rem] text-black/70 ${roboto.className}`}>
				{item.comment}
			</div>
		</div>
	)
}

export default Comment