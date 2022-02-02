import { Link } from 'react-router-dom';

import Card from '../Card/Card';
import styles from './Suggestions.module.css';

function Suggestions(props) {
	return (
		<Card cardHeader="YOU MAY LIKE THESE COURSES" background="secondary">
			<div className={styles.courses}>{props.children}</div>
			{props.link && <Link to="/notimplemented">{props.link}</Link>}
		</Card>
	);
}

export default Suggestions;
