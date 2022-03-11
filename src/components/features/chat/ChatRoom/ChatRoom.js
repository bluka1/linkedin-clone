import { NavLink } from 'react-router-dom';
import Avatar from '../../../core/Avatar/Avatar';
import styles from './ChatRoom.module.css';

function ChatRoom(props) {
	return (
		<div className={styles.chatRoom}>
			<Avatar imageSrc={props.imageSrc} size="l" />
			<div>
				<p className={styles.chatPersonName}>{props.personName}</p>
				<div>
					{props.myMessage && <Avatar imageSrc="/images/dmitry.jpg" size="xxxs" />}
					<p className={styles.chatMessage}>{props.chatMessage}</p>
				</div>
			</div>
		</div>
	);
}

export default ChatRoom;
