import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import ProfileNavbar from './ProfileNavbar/ProfileNavbar';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import styles from './ProfileMain.module.css';

function ProfileMain() {
	return (
		<div className={styles.profileMain}>
			<ProfileDescription />
			<ProfileNavbar />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Education />
		</div>
	);
}

export default ProfileMain;
