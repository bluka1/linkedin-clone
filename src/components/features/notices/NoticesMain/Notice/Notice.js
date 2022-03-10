import { ReactComponent as MoreIcon } from '../../../../../assets/icons/more-horizontal.svg';
import Avatar from '../../../../core/Avatar/Avatar';

import styles from './Notice.module.css';

function Notice(props) {
	return (
		<div className={styles.notice}>
			<div className={styles.noticeImages}>
				{props.images.map((img) => {
					return <Avatar imageSrc={img} size="xs" key={img} />;
				})}
			</div>

			<div className={styles.noticeDescription}>
				<p className={styles.noticeTitle}>{props.title}</p>
				<p className={styles.noticeTimeAgo}>{props.timeAgo}</p>
			</div>

			<div className={styles.noticeOptions}>
				<MoreIcon />
			</div>
		</div>
	);
}

export default Notice;
