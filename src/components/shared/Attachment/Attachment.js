import { ReactComponent as CloudIcon } from '../../../assets/icons/download-cloud.svg';

import styles from './Attachment.module.css';

function Attachment({ Icon, title, subtitle }) {
	return (
		<div className={styles.attachment}>
			<Icon />
			<div className={styles.description}>
				<h5>{title}</h5>
				<p>{subtitle}</p>
			</div>
			<CloudIcon />
		</div>
	);
}

export default Attachment;
