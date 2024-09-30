import React from 'react'
import Analytic, { analyticProps } from './analytic'

const base_path = '/visualizations/plots';

const content: analyticProps[] = [
	{
		title: "Distribution of data",
		description: "As you can see there is highly imbalance data 143346 belongs to clean category i.e there is no toxicity among them while a very less number of comments belongs to toxicicity. The data distribution is approx 90% and 10%. What to do : ",
		points: [
			"We can upsample the toxic comments either by manually searching and collecting data or other trick is to use google translator to translate the toxic comments to other language and again convert to english.",
			"We can downsample the clean category by reducing some of the comments. But its not that much feasable as the data is already less and it would cause loss of data."
		],
		image_source: `${base_path}/clean_and_other.png`
	},
	{
		title: "Distribution of number of comments in individual categories",
		description: "This shows the distribution of the comments as you can see there are some of the sentences whose length is too long they can be spams cannot say it 100% but some of them are spams i noticed it while EDA(Exploratory Data Analysis).",
		image_source: `${base_path}/num_sentences.png`
	},
	{
		title: "Distribution of comments with less than 30% of unique words",
		description: "This shows the distribution and count of the comments that has less than 30% of the unique words in the document. (why ? 30% we can choose any but for simplicity i just choose a number). Clean comments are 90% but still only 80 comments are spam in this category.",
		image_source: `${base_path}/num_unique_words_bar.png`
	},
	{
		title: "Boxplot with less than 30% of unique words",
		description: "This shows the distribution and count of the comments that has less than 30% of the unique words in the document. (why ? 30% we can choose any but for simplicity i just choose a number). Clean comments are 90% but still only 80 comments are spam in this category.",
		image_source: `${base_path}/num_unique_words.png`
	},
	{
		title: "Distribution and count of tags",
		description: "There are 6 categories of classification clean, toxic, severe toxic, obscene, threat, Insult, Identity hate. Each category is represented by binary data either 0 or 1. (0 Represents the particular comment does not belongs to that category and 1 is opposite of it). Very large number has 0 tags in all the category and the rest are in decreasing order.",
		image_source: `${base_path}/tags_distribution.png`
	}
]




const Analytics = () => {
	return (
		<div className='px-8'>
			{
				content.map((item, index) => <Analytic item={item} key={index.toString()}/>)
			}
		</div>
	)
}

export default Analytics