import Avatar from '../../../../core/Avatar/Avatar';
import Button from '../../../../core/Button/Button';

import styles from './Job.module.css';

function Job(props) {
	return (
		<div className={styles.job}>
			<div>
				<Avatar imageSrc={props.imageSrc} size="xl" />
			</div>
			<div className={styles.jobDescription}>
				<h5>{props.title}</h5>
				<div className={styles.jobDetails}>
					<span className={styles.publisher}>{props.publisher}</span>
					<span className={styles.location}>{props.location}</span>
				</div>
				<p className={styles.jobText}>{props.jobText}</p>
			</div>
			<div>
				<Button text="more" variant="filled" />
			</div>
		</div>
	);
}

export default Job;
