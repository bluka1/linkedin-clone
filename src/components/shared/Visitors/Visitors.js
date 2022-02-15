import UserInfo from '../UserInfo/UserInfo';
import Card from '../../core/Card/Card';

import styles from './Visitors.module.css';

function Visitors() {
	return (
		<Card cardHeader="visitors" headerLink="view all" background="secondary">
			<div className={styles.profileVisitors}>
				<UserInfo
					imageSrc="/images/darlene.jpg"
					name="Darlene Black"
					description="HR-manager, 10000 connections and premium Linkedin member"
				/>
				<UserInfo imageSrc="/images/theresa.jpg" name="Theresa Steward" description="iOS developer" />
				<UserInfo imageSrc="/images/brandon.jpg" name="Brandon Wilson" description="Senior UX designer" />
				<UserInfo
					imageSrc="/images/kyle.jpg"
					name="Kyle Fisher"
					description="Product designer at Computers&Internet Company"
				/>
				<UserInfo imageSrc="/images/audrey.jpg" name="Audrey Alexander" description="Team lead at Google" />
			</div>
		</Card>
	);
}

export default Visitors;
