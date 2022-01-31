import { Link } from 'react-router-dom';

import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';

import zara from '../../img/zara.jpg';
import scthon from '../../img/scthon.jpg';
import drozd from '../../img/drozd.jpg';
import styles from './Projects.module.css';

function Projects() {
	return (
		<ProfileMainCard>
			<h3>
				Projects&emsp;<span className={styles.projectsNumber}>3 of 12</span>
			</h3>
			<div className={styles.projects}>
				<div className={styles.project}>
					<img src={zara} alt="project image" />
					<h5>Zara redesign concept</h5>
					<p>UX/UI design, 15.07.2019</p>
				</div>
				<div className={styles.project}>
					<img src={scthon} alt="project image" />
					<h5>SCTHON event brand identity</h5>
					<p>Graphic design, 03.31.2019</p>
				</div>
				<div className={styles.project}>
					<img src={drozd} alt="project image" />
					<h5>Drozd. Brand identity. 2016</h5>
					<p>Graphic design, 03.04.2016</p>
				</div>
			</div>
			<Link to="/notimplemented">SHOW ALL (12)</Link>
		</ProfileMainCard>
	);
}

export default Projects;
