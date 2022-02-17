import { Outlet } from 'react-router-dom';

import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import styles from './ProfileMain.module.css';

function ProfileMain() {
	return (
		<div className={styles.profileMain}>
			<ProfileDescription />
			<ProfileNavbar />
			<Outlet />
		</div>
	);
}

export default ProfileMain;
