import styles from './GroupCard.module.css';

function GroupCard(props) {
	return (
		<div className={styles.groupCard}>
			<img src={props.imageSrc} alt="group icon" />
			<h5>{props.title}</h5>
		</div>
	);
}

export default GroupCard;
