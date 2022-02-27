import { ReactComponent as MoreIcon } from '../../../../../../assets/icons/more-horizontal.svg';

import styles from './PostHeader.module.css';

function PostHeader(props) {
	return (
		<div className={styles.postHeader}>
			{props.children}
			<MoreIcon />
		</div>
	);
}

export default PostHeader;
