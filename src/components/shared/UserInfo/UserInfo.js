import styles from './UserInfo.module.css';

function UserInfo({ source, name, description }) {
	return (
		<div className={styles.userInfo}>
			<div className={styles.userInfoPicture}>
				<img src={source} alt="user photo" />
			</div>
			<div>
				<p className={styles.userName}>{name}</p>
				<p className={styles.userDescription}>{description}</p>
			</div>
		</div>
	);
}

export default UserInfo;
