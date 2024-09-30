import React from 'react'
import Analytic, { analyticProps } from '../analytics/analytic';

const base_path = '/visualizations/reports';

const content: analyticProps[] = [
	{
		title: "Model accuracy v/s validation accuration",
		description: "",
		image_source: `${base_path}/accuracy_graph.png`
	},
	{
		title: "Model loss v/s validation loss",
		description: "",
		image_source: `${base_path}/loss_graph.png`
	},
	{
		title: "Identity hate confusion matrix",
		description: "",
		image_source: `${base_path}/confusion_matrix_identity_hate.png`
	},
	{
		title: "Insult confusion matrix",
		description: "",
		image_source: `${base_path}/confusion_matrix_insult.png`
	},
	{
		title: "Obscene confusion matrix",
		description: "",
		image_source: `${base_path}/confusion_matrix_obscene.png`
	},
	{
		title: "Severe Toxic confusion matrix",
		description: "",
		image_source: `${base_path}/confusion_matrix_severe_toxic.png`
	},
	{
		title: "Toxic confusion matrix",
		description: "",
		image_source: `${base_path}/confusion_matrix_toxic.png`
	},
	{
		title: "Threat confusion matrix",
		description: "",
		image_source: `${base_path}/confusion_matrix_threat.png`
	}

]


const Matrics = () => {
	return (
		<div className='px-8'>
			{
				content.map((item, index) => <Analytic item={item} key={index.toString()}/>)
			}
		</div>
	)
}

export default Matrics