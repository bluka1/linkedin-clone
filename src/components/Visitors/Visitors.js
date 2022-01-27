import DarleneIcon from '../../img/darlene.jpg';
import TheresaIcon from '../../img/theresa.jpg';
import BrandonIcon from '../../img/brandon.jpg';
import KyleIcon from '../../img/kyle.jpg';
import AudreyIcon from '../../img/audrey.jpg';
import ProfileCard from '../ProfileCard/ProfileCard';
import Card from '../Card/Card';

import styles from './Visitors.module.css';

function Visitors() {
	return (
		<Card cardHeader="VISITORS" headerLink="VIEW ALL" background="var(--white-secondary)">
			<div className={styles.profileVisitors}>
				<ProfileCard source={DarleneIcon} name="Darlene Black" description="HR-manager, 10000 connec..." />
				<ProfileCard source={TheresaIcon} name="Theresa Steward" description="iOS developer" />
				<ProfileCard source={BrandonIcon} name="Brandon Wilson" description="Senior UX designer" />
				<ProfileCard source={KyleIcon} name="Kyle Fisher" description="Product designer at Com..." />
				<ProfileCard source={AudreyIcon} name="Audrey Alexander" description="Team lead at Google" />
			</div>
		</Card>
	);
}

export default Visitors;
