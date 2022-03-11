import { ReactComponent as PaperclipIcon } from '../../../../assets/icons/paperclip.svg';
import { ReactComponent as SendIcon } from '../../../../assets/icons/send.svg';

import styles from './Room.module.css';

function Room(props) {
	return (
		<div className={styles.room}>
			<div className={styles.roomHeader}>
				<div className={styles.roomHeaderContent}>
					<p>
						Chat with <span className={styles.roomHeaderName}>Kyle Fisher</span>
					</p>
					<p className={styles.lastOnline}>Last online: 4 hours ago</p>
				</div>
				<div className={styles.roomHeaderContent}>
					<PaperclipIcon />
					<p>shared media (12)</p>
				</div>
			</div>
			<div className={styles.roomMain}></div>
			<div className={styles.roomFooter}>
				<input type="text" placeholder="Write your message" />
				<div className={styles.roomFooterIcons}>
					<PaperclipIcon />
					<div className={styles.roomFooterSendIcon}>
						<SendIcon />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Room;
