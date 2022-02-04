import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card({ background, cardHeader, headerLink, children }) {
	return (
		<div className={`${styles.card} ${styles[background]}`}>
			<div className={styles.cardHeader}>
				{cardHeader && <h5>{cardHeader}</h5>}
				{headerLink && <Link to="/notimplemented">{headerLink}</Link>}
			</div>
			<div className={styles.cardMain}>{children}</div>
		</div>
	);
}

export default Card;
