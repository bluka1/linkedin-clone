import NewConnection from '../../../shared/NewConnection/NewConnection';
import SectionSeparator from '../../../shared/SectionSeparator/SectionSeparator';
import UserInfo from '../../../shared/UserInfo/UserInfo';
import styles from './ReceivedConnections.module.css';

function ReceivedConnections() {
	return (
		<>
			<div className={styles.sectionSeparatorMenu}>
				<SectionSeparator>
					<span>
						You have <a className={styles.sectionLink}>2 new connections</a>
					</span>
				</SectionSeparator>
			</div>

			<div className={styles.newConnections}>
				<NewConnection
					big
					message="Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?"
				>
					<UserInfo
						imageSrc="/images/brandon.jpg"
						name="Brandon Wilson"
						description="Senior UX designer"
						connections={623}
						background="primary"
					/>
				</NewConnection>
				<NewConnection big>
					<UserInfo
						imageSrc="/images/theresa.jpg"
						name="Theresa Steward"
						description="iOS developer"
						connections={481}
						background="primary"
					/>
				</NewConnection>
			</div>

			<div className={styles.sectionSeparator}>
				<SectionSeparator>
					<span>Recent connections</span>
				</SectionSeparator>
			</div>

			<div className={styles.recentConnections}>
				<NewConnection>
					<UserInfo
						imageSrc="/images/audrey.jpg"
						name="Audrey Alexander"
						description="Team lead at Google"
						background="primary"
					/>
					<p className={styles.recentConnectionTime}>Yesterday, 14:30</p>
				</NewConnection>
				<NewConnection>
					<UserInfo
						imageSrc="/images/kyle.jpg"
						name="Kyle Fisher"
						description="Product designer at Commandor Corp"
						background="primary"
					/>
					<p className={styles.recentConnectionTime}>Yesterday, 12:03</p>
				</NewConnection>
			</div>
			<div className={styles.recentConnections}>
				<NewConnection>
					<UserInfo
						imageSrc="/images/darlene.jpg"
						name="Darlene Black"
						description="HR-manager, 10000 connections"
						background="primary"
					/>
					<p className={styles.recentConnectionTime}>26 aug, monday</p>
				</NewConnection>
				<NewConnection>
					<UserInfo
						imageSrc="/images/eduardo.jpg"
						name="Eduardo Russell"
						description="Full stack developer at Yandex"
						background="primary"
					/>
					<p className={styles.recentConnectionTime}>25 aug, sunday</p>
				</NewConnection>
			</div>
		</>
	);
}

export default ReceivedConnections;
