import { useState } from 'react';

import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';
import SkillInstance from './SkillInstance/SkillInstance';
import styles from './Skills.module.css';

function Skills() {
	const [shown, setShown] = useState(false);

	const shownHandler = () => {
		setShown((prevState) => !prevState);
	};

	const uximages = [
		'/images/person1.jpg',
		'/images/person2.jpg',
		'/images/person3.jpg',
		'/images/person4.jpg',
		'/images/person5.jpg',
		'/images/person6.jpg',
	];
	const uiimages = [
		'/images/person3.jpg',
		'/images/person4.jpg',
		'/images/person5.jpg',
		'/images/person6.jpg',
		'/images/person7.jpg',
		'/images/person8.jpg',
		'/images/person9.jpg',
	];
	const brandimages = [
		'/images/person2.jpg',
		'/images/person3.jpg',
		'/images/person4.jpg',
		'/images/person5.jpg',
		'/images/person6.jpg',
	];

	return (
		<ProfileMainCard>
			<h3>Skills & Endorsements</h3>
			<div className={styles.skills}>
				<SkillInstance title="User experience (UX)" images={uximages} />
				<SkillInstance title="User interface (UI)" images={uiimages} />
				<SkillInstance title="Brand identity" images={brandimages} />
			</div>
			{shown && (
				<>
					<div className={styles.skills}>
						<SkillInstance title="User experience (UX)" images={uximages} />
						<SkillInstance title="User interface (UI)" images={uiimages} />
						<SkillInstance title="Brand identity" images={brandimages} />
					</div>
					<div className={styles.skills}>
						<SkillInstance title="User experience (UX)" images={uximages} />
						<SkillInstance title="User interface (UI)" images={uiimages} />
						<SkillInstance title="Brand identity" images={brandimages} />
					</div>
					<div className={styles.skills}>
						<SkillInstance title="User experience (UX)" images={uximages} />
						<SkillInstance title="User interface (UI)" images={uiimages} />
						<SkillInstance title="Brand identity" images={brandimages} />
					</div>
					<div className={styles.skills}>
						<SkillInstance title="User experience (UX)" images={uximages} />
						<SkillInstance title="User interface (UI)" images={uiimages} />
						<SkillInstance title="Brand identity" images={brandimages} />
					</div>
					<div className={styles.skills}>
						<SkillInstance title="User experience (UX)" images={uximages} />
						<SkillInstance title="User interface (UI)" images={uiimages} />
					</div>
				</>
			)}
			<button onClick={shownHandler}>Show all (17)</button>
		</ProfileMainCard>
	);
}

export default Skills;
