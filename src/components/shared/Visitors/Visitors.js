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
					background="secondary"
				/>
				<UserInfo
					imageSrc="/images/theresa.jpg"
					name="Theresa Steward"
					description="iOS developer"
					background="secondary"
				/>
				<UserInfo
					imageSrc="/images/brandon.jpg"
					name="Brandon Wilson"
					description="Senior UX designer"
					background="secondary"
				/>
				<UserInfo
					imageSrc="/images/kyle.jpg"
					name="Kyle Fisher"
					description="Product designer at Computers&Internet Company"
					background="secondary"
				/>
				<UserInfo
					imageSrc="/images/audrey.jpg"
					name="Audrey Alexander"
					description="Team lead at Google"
					background="secondary"
				/>
			</div>
		</Card>
	);
}

export default Visitors;
