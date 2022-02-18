import { ReactComponent as LikeIcon } from '../../../../../../assets/icons/thumbs-up.svg';
import { ReactComponent as CommentIcon } from '../../../../../../assets/icons/message-circle.svg';
import { ReactComponent as ShareIcon } from '../../../../../../assets/icons/share.svg';

import styles from './PostFooter.module.css';

function PostFooter(props) {
	return (
		<div className={styles.postFooter}>
			<div className={styles.engagement}>
				<div className={styles.likes}>
					<LikeIcon />
					<span>{props.likes}</span>
				</div>
				<div className={styles.comments}>
					<CommentIcon />
					<span>{props.comments}</span>
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
