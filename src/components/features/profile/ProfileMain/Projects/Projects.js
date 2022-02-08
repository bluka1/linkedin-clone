import { Link } from 'react-router-dom';

import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';
import Article from '../../../../shared/Article/Article';

import zara from '../../../../../img/zara.jpg';
import scthon from '../../../../../img/scthon.jpg';
import drozd from '../../../../../img/drozd.jpg';
import styles from './Projects.module.css';

function Projects() {
	return (
		<ProfileMainCard>
			<h3>
				Projects&emsp;<span className={styles.projectsNumber}>3 of 12</span>
			</h3>

			<div className={styles.projects}>
				<Article
					size="big"
					imageSrc={zara}
					title="Zara redesign concept"
					subtitle="UX/UI design, 15.07.2019"
					articleType="project"
				/>
				<Article
					size="big"
					imageSrc={scthon}
					title="SCTHON event brand identity"
					subtitle="Graphic design, 03.31.2019"
					articleType="project"
				/>
				<Article
					size="big"
					imageSrc={drozd}
					title="Drozd. Brand identity. 2016"
					subtitle="Graphic design, 03.04.2016"
					articleType="project"
				/>
			</div>

			<Link to="/notimplemented">SHOW ALL (12)</Link>
		</ProfileMainCard>
	);
}

export default Projects;
