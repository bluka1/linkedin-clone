import { Link } from 'react-router-dom';

import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';
import SkillCard from '../SkillCard/SkillCard';
import person1 from '../../img/person1.jpg';
import person2 from '../../img/person2.jpg';
import person3 from '../../img/person3.jpg';
import person4 from '../../img/person4.jpg';
import person5 from '../../img/person5.jpg';
import person6 from '../../img/person6.jpg';
import person7 from '../../img/person7.jpg';
import person8 from '../../img/person8.jpg';
import person9 from '../../img/person9.jpg';
import styles from './Skills.module.css';

function Skills() {
	const uximages = [person1, person2, person3, person4, person5, person6];
	const uiimages = [person3, person4, person5, person6, person7, person8, person9];
	const brandimages = [person2, person3, person4, person5, person6];

	return (
		<ProfileMainCard>
			<h3>Skills & Endorsements</h3>
			<div className={styles.skills}>
				<SkillCard title="User experience (UX)" images={uximages} />
				<SkillCard title="User interface (UI)" images={uiimages} />
				<SkillCard title="Brand identity" images={brandimages} />
			</div>
			<Link to="/notimplemented">SHOW ALL (17)</Link>
		</ProfileMainCard>
	);
}

export default Skills;
