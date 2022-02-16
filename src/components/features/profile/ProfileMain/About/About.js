import { useState } from 'react';
import ExpandButton from '../../../../core/ExpandButton/ExpandButton';
import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';
import styles from './About.module.css';

function About() {
	const [shown, setShown] = useState(false);

	const shownHandler = () => {
		setShown((prevState) => !prevState);
	};

	return (
		<ProfileMainCard>
			<h3 className={styles.heading}>About</h3>
			<p className={styles.description}>
				I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative
				projects, such as landing pages or unusual corporate websites.
			</p>
			{shown && (
				<>
					<p className={styles.description}>
						I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative
						projects, such as landing pages or unusual corporate websites.
					</p>
					<p className={styles.description}>
						I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative
						projects, such as landing pages or unusual corporate websites.
					</p>
				</>
			)}
			<ExpandButton text="See more" onClick={shownHandler} />
		</ProfileMainCard>
	);
}

export default About;
