import Card from '../../../../core/Card/Card';
import Tag from '../../../../core/Tag/Tag';

import styles from './Hashtags.module.css';

function Hashtags() {
	return (
		<Card cardHeader="followed hashtags" background="secondary">
			<div className={styles.hashtags}>
				<Tag text="#work" />
				<Tag text="#business" />
				<Tag text="#hr" />
				<Tag text="#userinterface" />
				<Tag text="#digital" />
				<Tag text="#userexperience" />
				<Tag text="#ux" />
				<Tag text="#ui" />
				<Tag text="#freelance" />
			</div>
		</Card>
	);
}

export default Hashtags;
