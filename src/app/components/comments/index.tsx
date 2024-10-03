import React, { useState } from 'react';
import Comment from './comment';
import { Send } from 'lucide-react';
import { Roboto } from 'next/font/google';
import { ReactQueryClass } from '@/app/utils/query';
import CustomAlertDialog from '../alert_dialog/CustomAlert';
import "./comments.css"

const roboto = Roboto({
	subsets: ['latin'],
	weight: '400',
});

export type commentArrTypes = {
	id: string;
	name: string;
	profile: string;
	time: string;
	comment: string;
};

const commentsArr: commentArrTypes[] = [
	{
		id: '1',
		name: 'Georgie Lobko',
		profile: '/profile_pic.webp',
		time: '2 hours ago',
		comment:
			'Beautiful view of idyllic alpine mountain scenery with blooming meadows and snowcapped mountain peaks on a beaut Beautiful view of idyllic alpine mountain scenery with blooming meadows and snowcapped mountain peaks on a beaut',
	},
	{
		id: '2',
		name: 'Georgie Lobko',
		profile: '/profile_pic.webp',
		time: '2 hours ago',
		comment:
			'Beautiful view of idyllic alpine mountain scenery with blooming meadows and snowcapped mountain peaks on a beaut Beautiful view of idyllic alpine mountain scenery with blooming meadows and snowcapped mountain peaks on a beaut',
	},
];

const Comments = () => {
	const [commentsContent, setCommentsContent] = useState(commentsArr);
	const [commentText, setCommentText] = useState('');
	const [isAlert, setIsAlert] = useState(false);
	const [isRequesting, setIsRequesting] = useState(false);
 
	const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCommentText(e.target.value);
	};

	const handleAddComment = async (newComment: string) => {
		if (newComment.trim() === '') return; // Ignore empty comments
		setIsRequesting(true);

		const predictCommentToxicity = await new ReactQueryClass().getPredictions('/predict', newComment);

		console.log(" Predictions : ", predictCommentToxicity);
		for (const key in predictCommentToxicity) {
			if (predictCommentToxicity[key] > 0.5) {
				setIsAlert(true);
				setCommentText('');
				setIsRequesting(false);
				return;
			}
		}

		const newCommentText = {
			id: (commentsContent.length + 1).toString(), // Increment ID properly
			name: commentsContent[0].name,
			profile: commentsContent[0].profile,
			time: 'Just now', // You can handle time formatting as needed
			comment: newComment,
		};

		setCommentsContent((prevComments) => [...prevComments, newCommentText]);
		setCommentText('');
		setIsRequesting(false);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleAddComment(commentText);
		}
	};

	return (
		<div className="absolute w-[55vw] h-[90vh] bg-white right-0 bottom-0 rounded-lg flex divide-y-2 py-4 px-4 flex-col border shadow-xl">
			<div className="font-bold text-xl text-black/70 w-full h-[6%]">Comments</div>
			<div className="w-full h-[84%] overflow-y-auto flex flex-col gap-4">
				{commentsContent.map((item) => (
					<Comment item={item} key={item.id} />
				))}
				<br />
			</div>
			<div className="w-full h-[10%] bg-yellow-100/30 shadow-lg rounded-3xl flex justify-center items-center">
				<div className="w-[90%] h-[100%] p-1">
					<input
						type="text"
						placeholder="Type your comment..."
						value={commentText}
						className={`w-[100%] h-[100%] bg-inherit px-4 outline-none ${roboto.className}`}
						onChange={handleCommentChange}
						onKeyDown={handleKeyDown}
					/>
				</div>
				{
    isRequesting ? 
    <div
        className="w-[10%] h-[100%] justify-center items-center flex text-black/70 cursor-pointer"
    >
        {/* You can use any loader, here I'm using a simple spinner */}
        <div className="loader"></div>
    </div>
    : 
    <div
        className="w-[10%] h-[100%] justify-center items-center flex text-black/70 cursor-pointer"
        onClick={() => handleAddComment(commentText)}
    >
        <Send />
    </div>
}

			</div>

			{/* Alert Dialog */}
			{
				isAlert && (
					<CustomAlertDialog
						title="Alert"
						message="Your comment is toxic. Please refrain from using such language. If you think we made a mistake, please let us know."
						onCancel={() => setIsAlert(false)}
						onOk={() => setIsAlert(false)}
						isOpen={isAlert}
					/>
				)
			}

		</div>
	);
};

export default Comments;
