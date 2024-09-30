import Link from 'next/link'
import React from 'react'

const Data = () => {
	return (
		<div className='px-8 w-[100vw]'>

			<div className='flex gap-6'>
				<button className='bg-blue-600/60 px-4 py-2 text-white font-bold rounded-lg'><Link href='https://www.kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge/data'>Download Dataset</Link></button>
				<button className='bg-blue-600/60 px-4 py-2 text-white font-bold rounded-lg'><Link href='https://www.kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge'>Visit Kaggle</Link></button>
			</div>

			<div className='my-4'>
				<h2 className='font-bold text-2xl'>Data Description</h2>
				<p className='font-medium text-lg w-[60%] my-4'>You are provided with a large number of Wikipedia comments which have been labeled by human raters for toxic behavior. The types of toxicity are:</p>
				<ul className='font-medium list-disc px-8'>
					<li>toxic</li>
					<li>severe_toxic</li>
					<li>obscene</li>
					<li>threat</li>
					<li>insult</li>
					<li>identity_hate</li>
				</ul>
			</div>


			<div>
				<h2 className='font-bold text-2xl my-4'>File Description</h2>
				<ul className='font-medium list-disc px-8'>
					<li>train.csv - the training set, contains comments with their binary labels</li>
					<li>test.csv - the test set, you must predict the toxicity probabilities for these comments. To deter hand labeling, the test set contains some comments which are not included in scoring.
					</li>
					<li>sample_submission.csv - a sample submission file in the correct format</li>
					<li>test_labels.csv - labels for the test data; value of -1 indicates it was not used for scoring; (Note: file added after competition close!)</li>
				</ul>
			</div>
		</div>
	)
}

export default Data