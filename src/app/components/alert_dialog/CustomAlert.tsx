// CustomAlertDialog.js
import React from 'react';
import './CustomAlertDialog.css'; // You can style it separately

export type alertProps = {
	title: string,
	message: string,
	onCancel: () => void,
	onOk: () => void,
	isOpen: boolean,
}

const CustomAlertDialog = ({ title, message, onCancel, onOk, isOpen }: alertProps) => {
	if (!isOpen) return null;

	return (
		<div className="alert-dialog-backdrop">
			<div className="alert-dialog">
				<h2 className='font-semibold text-[#f0c756] text-xl tracking-widest'>{title}</h2>
				<p className='text-sm my-4'>{message}</p>
				<div className="alert-dialog-buttons">
					<button className="cancel-btn" onClick={onCancel}>
						Cancel
					</button>
					<button className="ok-btn" onClick={onOk}>
						OK
					</button>
				</div>
			</div>
		</div>
	);
};

export default CustomAlertDialog;
