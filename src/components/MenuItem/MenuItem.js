import styles from './MenuItem.module.css';

function MenuItem({ source, text }) {
	return (
		<div className={styles.menuItem}>
			<img src={source} alt={text} />
			<p className={styles.text}>{text}</p>
		</div>
	);
}

export default MenuItem;
