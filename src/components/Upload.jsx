import { useRef } from 'react';
// import classNames from '../../../utils/classNames';
import { uploadFile } from '../util/upload-file';

const Upload = ({
	label = '',
	info = '',
	children,
	className = '',
	disabled = false,
	onChange,
	apiUrl,
}) => {
	const docRef = useRef(null);
	const onChangeFile = async (e) => {
		if (
			e.target.files.length > 0 
		) {
			console.log('Uploading file, please wait.');
			let result = await uploadFile(e.target.files[0], apiUrl);
			if (result.ResponseCode === 1) {
				onChange &&
					onChange(
						result.Result.fileUrl,
						e.target.files[0].name,
						e.target.files[0].size,
					);
			} else errorToast(result?.Comments);
		}
	};

	return (
		<div>
			{/* <div
				className={classNames(!disabled && 'cursor-pointer', className)}
				onClick={() => (!disabled ? docRef.current.click() : null)}
			>
				{children}
			</div> */}
			<input
				id="myInput"
				// className="hidden"
				type="file"
				ref={docRef}
				onChange={(e) => onChangeFile(e)}
			/>
		</div>
	);
};

export default Upload;
