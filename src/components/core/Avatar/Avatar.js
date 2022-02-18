import styles from './Avatar.module.css';

function Avatar({ imageSrc, size }) {
	return (
		<div className={`${styles.avatar} ${styles[size]}`}>
			<img src={imageSrc} alt="avatar image" />
		</div>
	);
}

export default Avatar;
