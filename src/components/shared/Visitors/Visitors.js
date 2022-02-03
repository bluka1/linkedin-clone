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
		<Card cardHeader="VISITORS" headerLink="VIEW ALL" background="secondary">
			<div className={styles.profileVisitors}>
				<UserInfo
					source={DarleneIcon}
					name="Darlene Black"
					description="HR-manager, 10000 connections and premium Linkedin member"
				/>
				<UserInfo source={TheresaIcon} name="Theresa Steward" description="iOS developer" />
				<UserInfo source={BrandonIcon} name="Brandon Wilson" description="Senior UX designer" />
				<UserInfo source={KyleIcon} name="Kyle Fisher" description="Product designer at Computers&Internet Company" />
				<UserInfo source={AudreyIcon} name="Audrey Alexander" description="Team lead at Google" />
			</div>
		</Card>
	);
}

export default Visitors;
