import React from 'react'
import Image from 'next/image'

export type analyticProps = {
	title: string,
	description: string,
	points?: string[],
	image_source: string
}

const Analytic = ({ item }: { item: analyticProps }) => {
	return (
		<div className='my-4'>
			<h2 className='font-bold text-2xl'>{item.title}</h2>
			<div className='flex justify-between gap-6'> {/* Ensures text and image stay side-by-side */}
				<div className='flex-1'>
					<p className='font-medium text-lg my-4'>{item.description}</p>
					<ul className='font-medium list-disc text-lg'>
						{
							item.points && (item.points?.length > 0) && item.points.map((point, index) => (
								<li key={index.toString()}>{point}</li>
							))
						}
					</ul>
				</div>
				<div className='w-[30rem] h-[25rem]'>
					<Image
						src={item.image_source}
						alt={item.title}
						width={600}
						height={600}
						className='w-[100%] h-[100%] rounded-md object-cover'
					/>
				</div>
			</div>
		</div>
	)
}

export default Analytic
