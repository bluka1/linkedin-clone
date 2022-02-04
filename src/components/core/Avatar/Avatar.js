import styles from './Avatar.module.css';

function Avatar({ source, size }) {
	return (
		<div className={`${styles.avatar} ${styles[size]}`}>
			<img src={source} alt="avatar image" />
		</div>
	);
}

export default Avatar;
