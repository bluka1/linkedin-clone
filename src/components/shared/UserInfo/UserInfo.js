import styles from './UserInfo.module.css';

function UserInfo({ imageSrc, name, description, connections, background, Icon }) {
	return (
		<div className={`${styles.userInfo} ${styles[background]}`}>
			<div className={styles.userInfoPicture}>
				<img src={imageSrc} alt="user photo" />
			</div>
			<div>
				<p className={styles.userName}>{name}</p>
				<p className={styles.userDescription}>{description}</p>
				{connections && <p className={styles.connections}>{connections} connections</p>}
			</div>
			{Icon && (
				<div className={styles.articleIcon}>
					<Icon />
				</div>
			)}
		</div>
	);
}

export default UserInfo;
