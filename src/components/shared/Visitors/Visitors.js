import DarleneIcon from '../../../img/darlene.jpg';
import TheresaIcon from '../../../img/theresa.jpg';
import BrandonIcon from '../../../img/brandon.jpg';
import KyleIcon from '../../../img/kyle.jpg';
import AudreyIcon from '../../../img/audrey.jpg';
import UserInfo from '../UserInfo/UserInfo';
import Card from '../../core/Card/Card';

import styles from './Visitors.module.css';

function Visitors() {
	return (
		<Card cardHeader="visitors" headerLink="view all" background="secondary">
			<div className={styles.profileVisitors}>
				<UserInfo
					imageSrc={DarleneIcon}
					name="Darlene Black"
					description="HR-manager, 10000 connections and premium Linkedin member"
				/>
				<UserInfo imageSrc={TheresaIcon} name="Theresa Steward" description="iOS developer" />
				<UserInfo imageSrc={BrandonIcon} name="Brandon Wilson" description="Senior UX designer" />
				<UserInfo imageSrc={KyleIcon} name="Kyle Fisher" description="Product designer at Computers&Internet Company" />
				<UserInfo imageSrc={AudreyIcon} name="Audrey Alexander" description="Team lead at Google" />
			</div>
		</Card>
	);
}

export default Visitors;
