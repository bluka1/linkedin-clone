import { useState } from 'react';

import { ReactComponent as LikeIcon } from '../../../../../../assets/icons/thumbs-up.svg';
import { ReactComponent as LikeFilledIcon } from '../../../../../../assets/icons/thumbs-up-fill.svg';
import { ReactComponent as CommentIcon } from '../../../../../../assets/icons/message-circle.svg';
import { ReactComponent as CommentFilledIcon } from '../../../../../../assets/icons/message-circle-fill.svg';
import { ReactComponent as ShareIcon } from '../../../../../../assets/icons/share.svg';

import styles from './PostFooter.module.css';

function PostFooter(props) {
	const [clickedLikes, setClickedLikes] = useState(false);
	const [clickedComments, setClickedComments] = useState(false);

	const likesHandler = () => {
		setClickedLikes((prevState) => !prevState);
	};

	const commentsHandler = () => {
		setClickedComments((prevState) => !prevState);
	};

	return (
		<div className={styles.postFooter}>
			<div className={styles.engagement}>
				<div className={styles.likes} onClick={likesHandler}>
					{clickedLikes ? <LikeFilledIcon /> : <LikeIcon />}
					<span>{clickedLikes ? props.likes + 1 : props.likes}</span>
				</div>
				<div className={styles.comments} onClick={commentsHandler}>
					{clickedComments ? <CommentFilledIcon /> : <CommentIcon />}
					<span>{clickedComments ? props.comments + 1 : props.comments}</span>
				</div>
			</div>
			<div className={styles.share}>
				<ShareIcon />
				<span>share</span>
			</div>
		</div>
	);
}

export default PostFooter;
