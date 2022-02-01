import styles from './ProfileCard.module.css';

function ProfileCard({ source, name, description }) {
	return (
		<div className={styles.profileCard}>
			<div className={styles.profileCardPicture}>
				<img src={source} alt="personal photo" />
			</div>
			<div>
				<p className={styles.profileName}>{name}</p>
				<p className={styles.profileDescription}>{description}</p>
			</div>
		</div>
	);
}

export default ProfileCard;
