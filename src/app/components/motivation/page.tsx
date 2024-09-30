import React from 'react'

const Motivation = () => {
	return (
<div>
			<h2 className='font-bold text-3xl text-black/70 tracking-widest'>Motivation</h2>
			<div className='flex flex-col gap-4 my-6 text-lg'>
				<p>The rise of online communication platforms has significantly increased the volume of user-generated content. Unfortunately, this has also led to an increase in toxic and harmful comments that can negatively impact the mental health of users and degrade the quality of online discussions. Automated moderation systems are essential to maintain a healthy and safe online environment, but traditional rule-based systems struggle to handle the nuances of language and context in toxic comments.</p>

				<p>This project was motivated by the need for a more sophisticated and accurate solution that can handle the complex nature of toxic language, detect multiple forms of toxicity in comments, and be deployable in real-world environments. By utilizing advanced NLP techniques and deep learning models, this system is designed to aid platforms in identifying harmful content quickly and efficiently, allowing moderators to focus on more critical issues while the model handles routine toxicity detection.</p>

				<p>The combination of modern deep learning techniques with NLP is a powerful approach that not only enhances performance but also ensures that the system can adapt to new and evolving toxic language patterns. This project aims to contribute to the growing need for better automated moderation tools, providing a scalable, efficient, and reliable solution for toxicity prediction.</p>
			</div>
		</div>
	)
}

export default Motivation