import { Link } from 'react-router-dom';
import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';
import styles from './About.module.css';

function About() {
	return (
		<ProfileMainCard>
			<h3 className={styles.heading}>About</h3>
			<p className={styles.description}>
				I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative
				projects, such as landing pages or unusual corporate websites.
			</p>
			<Link to="/notimplemented">SEE MORE</Link>
		</ProfileMainCard>
	);
}

export default About;
