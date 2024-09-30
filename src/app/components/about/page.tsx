import React from 'react'

const About = () => {
	return (
		<div>
			<h2 className='font-bold text-3xl text-black/70 tracking-widest'>About Project</h2>
			<div className='flex flex-col gap-4 my-6 text-lg'>
				<p>This project aims to develop a highly accurate comment toxicity detection system using a combination of deep learning, machine learning, and natural language processing (NLP) techniques. The model classifies comments into multiple categories such as toxic, severe toxic, obscene, threat, insult, identity hate, and clean. The approach involves leveraging both traditional machine learning methods and modern deep learning architectures, such as Convolutional Neural Networks (CNN), Long Short-Term Memory Networks (LSTM), and Bidirectional LSTM, to capture both lexical and contextual information from the text.</p>

				<p>The system is built using a multilabel classification framework, handling the complexity of identifying overlapping categories in comment toxicity. The project integrates pretrained word embeddings, such as FastText, along with custom-trained embeddings during model training. Essential text preprocessing steps like lemmatization, stopword removal, and punctuation cleaning have been implemented, ensuring the data is clean and ready for model input.</p>

				<p>In addition to core deep learning models, various performance-enhancing techniques such as N-grams, TF-IDF, and data augmentation are employed to improve accuracy and robustness. The model is trained on real-world datasets, and a Flask-based API has been developed to deploy the system for real-time toxicity detection.</p>
			</div>
		</div>
	)
}

export default About