import React from 'react'
import Feed from '../components/feed'

const Presentation = () => {
  return (
	<div className='flex flex-col gap-4 bg-black/10 py-2'>
		<Feed/>
		<Feed/>
	</div>
  )
}

export default Presentation