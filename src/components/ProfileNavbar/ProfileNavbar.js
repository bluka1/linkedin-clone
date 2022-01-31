import { NavLink } from 'react-router-dom';

import styles from './ProfileNavbar.module.css';

function ProfileNavbar() {
	return (
		<div className={styles.navbar}>
			<NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
				PROFILE
			</NavLink>
			<NavLink
				to="/profile/activityandinterests"
				className={({ isActive }) => (isActive ? styles.active : styles.inactive)}
			>
				ACTIVITY & INTERESTS
			</NavLink>
			<NavLink to="/profile/articles" className={({ isActive }) => (isActive ? styles.active : styles.inactive)}>
				ARTICLES (3)
			</NavLink>
		</div>
	);
}

export default ProfileNavbar;
