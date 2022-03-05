import styles from './GroupCard.module.css';

function GroupCard(props) {
	return (
		<div className={props.subtitle ? styles.groupCardSubtitle : styles.groupCardTitle}>
			<img src={props.imageSrc} alt="group icon" />

			{props.subtitle ? (
				<div className={styles.groupCardInfo}>
					<h5>{props.title}</h5>
					<p>{props.subtitle}</p>
				</div>
			) : (
				<h5>{props.title}</h5>
			)}
		</div>
	);
}

export default GroupCard;
