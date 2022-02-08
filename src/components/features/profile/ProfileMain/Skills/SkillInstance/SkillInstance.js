import Avatar from '../../../../../core/Avatar/Avatar';
import styles from './SkillInstance.module.css';

function SkillInstance(props) {
	const skillsImages = [];
	for (let i = 0; i < 5; i++) {
		skillsImages.push(props.images[i]);
	}

	const endorsements = props.images.length - 5;

	return (
		<div className={styles.skillCard}>
			<div className={styles.header}>
				<h5>{props.title}</h5>
				<p className={styles.number}>{props.images.length}</p>
			</div>
			<div className={styles.images}>
				{skillsImages.map((image) => {
					return <Avatar imageSrc={image} size="xxs" key={image} />;
				})}
				{endorsements > 0 ? <div className={styles.endorsementsNumber}>+{endorsements}</div> : ''}
			</div>
		</div>
	);
}

export default SkillInstance;
