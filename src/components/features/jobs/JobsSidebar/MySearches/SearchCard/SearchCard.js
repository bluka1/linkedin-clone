import { useState } from 'react';

import { ReactComponent as BellIcon } from '../../../../../../assets/icons/bell-s.svg';
import { ReactComponent as BellOffIcon } from '../../../../../../assets/icons/bell-off.svg';

import styles from './SearchCard.module.css';

function SearchCard(props) {
	const [notificationsOn, setNotificationsOn] = useState(true);

	const onOffHandler = () => {
		setNotificationsOn((prevState) => !prevState);
	};

	return (
		<div className={styles.searchCard}>
			<div className={styles.searchInfo}>
				<h5 className={styles.title}>
					{props.title} {props.applicants && <span className={styles.applicants}>+{props.applicants}</span>}
				</h5>
				<p className={styles.location}>{props.location}</p>
			</div>
			<div className={styles.searchNotifications} onClick={onOffHandler}>
				{notificationsOn ? <BellIcon /> : <BellOffIcon />}
			</div>
		</div>
	);
}

export default SearchCard;
