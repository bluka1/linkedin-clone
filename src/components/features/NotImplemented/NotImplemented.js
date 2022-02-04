import { Link } from 'react-router-dom';

import { ReactComponent as WarningIcon } from '../../../img/warning.svg';
import styles from './NotImplemented.module.css';

function NotImplemented() {
	return (
		<div className={styles.notImplemented}>
			<h1>Not implemented...yet</h1>
			<p>Check some other links on this page:</p>
			<div className={styles.links}>
				<Link to="/">FEED</Link>
				<Link to="/jobs">JOBS</Link>
				<Link to="/chat">CHAT</Link>
			</div>
			<WarningIcon />
		</div>
	);
}

export default NotImplemented;
