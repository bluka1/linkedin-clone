import { useState } from 'react';
import { Link } from 'react-router-dom';

import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';
import Article from '../../../../shared/Article/Article';

import styles from './Projects.module.css';
import ExpandButton from '../../../../core/ExpandButton/ExpandButton';

function Projects() {
	const [shown, setShown] = useState(false);

	const shownHandler = () => {
		setShown((prevState) => !prevState);
	};

	return (
		<ProfileMainCard>
			<h3>
				Projects&emsp;<span className={styles.projectsNumber}>3 of 12</span>
			</h3>

			<div className={styles.projects}>
				<Article
					size="big"
					imageSrc="/images/zara.jpg"
					title="Zara redesign concept"
					subtitle="UX/UI design, 15.07.2019"
					articleType="project"
				/>
				<Article
					size="big"
					imageSrc="/images/scthon.jpg"
					title="SCTHON event brand identity"
					subtitle="Graphic design, 03.31.2019"
					articleType="project"
				/>
				<Article
					size="big"
					imageSrc="/images/drozd.jpg"
					title="Drozd. Brand identity. 2016"
					subtitle="Graphic design, 03.04.2016"
					articleType="project"
				/>
				{shown && (
					<>
						<Article
							size="big"
							imageSrc="/images/zara.jpg"
							title="Zara redesign concept"
							subtitle="UX/UI design, 15.07.2019"
							articleType="project"
						/>
						<Article
							size="big"
							imageSrc="/images/scthon.jpg"
							title="SCTHON event brand identity"
							subtitle="Graphic design, 03.31.2019"
							articleType="project"
						/>
						<Article
							size="big"
							imageSrc="/images/drozd.jpg"
							title="Drozd. Brand identity. 2016"
							subtitle="Graphic design, 03.04.2016"
							articleType="project"
						/>
						<Article
							size="big"
							imageSrc="/images/zara.jpg"
							title="Zara redesign concept"
							subtitle="UX/UI design, 15.07.2019"
							articleType="project"
						/>
						<Article
							size="big"
							imageSrc="/images/scthon.jpg"
							title="SCTHON event brand identity"
							subtitle="Graphic design, 03.31.2019"
							articleType="project"
						/>
						<Article
							size="big"
							imageSrc="/images/drozd.jpg"
							title="Drozd. Brand identity. 2016"
							subtitle="Graphic design, 03.04.2016"
							articleType="project"
						/>
						<Article
							size="big"
							imageSrc="/images/zara.jpg"
							title="Zara redesign concept"
							subtitle="UX/UI design, 15.07.2019"
							articleType="project"
						/>
						<Article
							size="big"
							imageSrc="/images/scthon.jpg"
							title="SCTHON event brand identity"
							subtitle="Graphic design, 03.31.2019"
							articleType="project"
						/>
						<Article
							size="big"
							imageSrc="/images/drozd.jpg"
							title="Drozd. Brand identity. 2016"
							subtitle="Graphic design, 03.04.2016"
							articleType="project"
						/>
					</>
				)}
			</div>
			<ExpandButton onClick={shownHandler}>{shown ? 'Show less' : 'Show all (12)'}</ExpandButton>
		</ProfileMainCard>
	);
}

export default Projects;
