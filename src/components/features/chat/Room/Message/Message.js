import Avatar from '../../../../core/Avatar/Avatar';
import { ReactComponent as ReadIcon } from '../../../../../assets/icons/read.svg';
import styles from './Message.module.css';

function Message(props) {
	return (
		<div className={`${styles.message} ${props.sender === 'dmitry' ? styles.dmitry : styles.otherSender}`}>
			{props.sender === 'dmitry' ? (
				<>
					<p className={styles.messageText}>{props.messageText}</p>
					<div className={styles.messageInfo}>
						{props.read && <ReadIcon />}
						<p className={styles.messageTime}>{props.messageTime}</p>
					</div>
				</>
			) : (
				<>
					<div>
						<p className={styles.messageText}>{props.messageText}</p>
						<p className={styles.messageTime}>{props.messageTime}</p>
					</div>
					<Avatar imageSrc={props.imageSrc} size="m" />
				</>
			)}
		</div>
	);
}

export default Message;
