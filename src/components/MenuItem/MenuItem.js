import styles from './MenuItem.module.css';

function MenuItem({ Icon, text }) {
	return (
		<div className={styles.menuItem}>
			<Icon />
			<p className={styles.text}>{text}</p>
		</div>
	);
}

export default MenuItem;
