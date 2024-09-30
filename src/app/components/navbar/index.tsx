import React from 'react'

import { Kanit, Dancing_Script } from "next/font/google"
import { GitCompareArrows } from 'lucide-react'
import Link from 'next/link'

const kanit = Kanit({
	subsets: ['latin'],
	weight: '400'
})
const dancing_script = Dancing_Script({
	subsets: ['latin'],
	weight: '600'
})


const Navbar = () => {
	return (
		<div className='w-full h-[10vh] bg-white/80 flex'>
			<div className='w-[20%] h-[100%] flex justify-center items-center'>
				<span className={`font-extrabold text-3xl ${dancing_script.className}`}>Comment Toxicity</span>
			</div>
			<div className={`w-[70%] h-[100%] flex justify-start items-center gap-8 px-8 font-semibold text-lg ${kanit.className}`}>
				<span className='cursor-pointer'><Link href='/'>Home</Link></span>
				<span className='cursor-pointer'><Link href='/data'>Data</Link></span>
				<span className='cursor-pointer'><Link href='/matrics'>Matrics</Link></span>
				<span className='cursor-pointer'><Link href='/analytics'>Analytics</Link></span>
				<span className='cursor-pointer'><Link href='/presentation'>Presentation</Link></span>
			</div>
			<div className='w-[10%] h-[100%] flex items-center justify-center'>
				<Link href='https://github.com/DEEPAKsingh74' className='flex justify-center items-center bg-black/80 text-white px-4 py-2 gap-2 font-bold rounded-lg'>
					<span><GitCompareArrows /></span>
					<span>Github</span>
				</Link>
			</div>
		</div>
	)
}

export default Navbar