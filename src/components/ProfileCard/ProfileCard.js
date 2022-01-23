import { Avatar } from '@material-ui/core';
import styles from './ProfileCard.module.css';

function ProfileCard(props) {
	return (
		<div className={styles.profileCard}>
			<div>
				<Avatar />
			</div>
			<div>
				<p className={styles.profileName}>{props.name}</p>
				<p className={styles.profileDescription}>{props.description}</p>
			</div>
		</div>
	);
}

export default ProfileCard;
