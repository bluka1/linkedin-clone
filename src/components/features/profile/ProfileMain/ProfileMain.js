import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import styles from './ProfileMain.module.css';

function ProfileMain() {
	const location = useLocation();
	const [locationPath, setLocationPath] = useState(location.pathname);

	useEffect(() => {
		setLocationPath(location.pathname);
	}, [location]);

	return (
		<div className={styles.profileMain}>
			<ProfileDescription />
			<ProfileNavbar />
			{locationPath === '/profile/general' && (
				<>
					<About />
					<Projects />
					<Skills />
					<Experience />
					<Education />
				</>
			)}
			{locationPath === '/profile/articles' && (
				<>
					<About />
					<Projects />
					<Skills />
				</>
			)}
			{locationPath === '/profile/activityandinterests' && (
				<>
					<Experience />
					<Education />
				</>
			)}
		</div>
	);
}

export default ProfileMain;
