import styles from './Card.module.css';

function Card(props) {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				{props.cardHeader}
				{props.headerLink ? props.headerLink : ''}
			</div>
			<div className={styles.cardMain}>{props.children}</div>
		</div>
	);
}

export default Card;
