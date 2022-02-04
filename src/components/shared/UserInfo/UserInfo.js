import styles from './UserInfo.module.css';

function UserInfo({ imageSrc, name, description }) {
	return (
		<div className={styles.userInfo}>
			<div className={styles.userInfoPicture}>
				<img src={imageSrc} alt="user photo" />
			</div>
			<div>
				<p className={styles.userName}>{name}</p>
				<p className={styles.userDescription}>{description}</p>
			</div>
		</div>
	);
}

export default UserInfo;
