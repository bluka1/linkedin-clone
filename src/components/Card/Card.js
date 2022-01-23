import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card(props) {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				{props.cardHeader}
				{props.headerLink ? <Link to="/notimplemented">{props.headerLink}</Link> : ''}
			</div>
			<div className={styles.cardMain}>{props.children}</div>
		</div>
	);
}

export default Card;
