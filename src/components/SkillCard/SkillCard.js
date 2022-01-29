import styles from './SkillCard.module.css';

function SkillCard(props) {
	return (
		<div className={styles.skillCard}>
			<div className={styles.header}>
				<h5>{props.title}</h5>
				<p className={styles.number}>{props.images.length}</p>
			</div>
			<div className={styles.images}>
				{props.images.map((image) => {
					<img src={image} alt="person picture" />;
				})}
			</div>
		</div>
	);
}

export default SkillCard;
