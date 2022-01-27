import { Link } from 'react-router-dom';

import styles from './Card.module.css';

function Card(props) {
	return (
		<div className={styles.card} style={{ backgroundColor: `${props.background}` }}>
			<div className={styles.cardHeader}>
				{props.cardHeader}
				{props.headerLink ? <Link to="/notimplemented">{props.headerLink}</Link> : ''}
				{props.headerUnderlinedLink ? (
					<div className={styles.underlined}>
						<Link to="/notimplemented">{props.headerUnderlinedLink}</Link>
					</div>
				) : (
					''
				)}
			</div>
			<div className={styles.cardMain}>{props.children}</div>
		</div>
	);
}

export default Card;
