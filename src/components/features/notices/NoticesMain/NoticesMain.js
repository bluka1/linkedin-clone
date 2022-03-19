import SectionSeparator from '../../../shared/SectionSeparator/SectionSeparator';
import Notice from './Notice/Notice';

import styles from './NoticesMain.module.css';

function NoticesMain() {
	const images1 = ['/images/upwork.jpg', '/images/facebook.jpg', '/images/google.jpg'];
	const images2 = ['/images/kyle.jpg', '/images/brandon.jpg', '/images/audrey.jpg'];
	const images3 = ['/images/audrey.jpg', '/images/theresa.jpg', '/images/eduardo.jpg'];
	const images4 = ['/images/facebook.jpg', '/images/instagram.jpg', '/images/linkedin.jpg'];
	const images5 = ['/images/darlene.jpg', '/images/brandon.jpg', '/images/kyle.jpg'];

	return (
		<div className={styles.noticesMain}>
			<div className={styles.sectionSeparator}>
				<SectionSeparator>
					<span>recent</span>
				</SectionSeparator>
			</div>

			<div className={styles.noticesContent}>
				<Notice images={images1} title="You appeared in 9 searches this week" timeAgo="3 hours" />
				<Notice images={images2} title="Audrey Alexander and 10 others viewed your profile" timeAgo="9 hours" />
				<Notice
					images={images3}
					title="Eduardo Russel and 4 others liked your post «1,000 connections! My network growth, so many bla bla bla"
					timeAgo="12 hours"
				/>
			</div>

			<div className={styles.sectionSeparator}>
				<SectionSeparator>
					<span>earlier</span>
				</SectionSeparator>
			</div>

			<div className={styles.noticesContent}>
				<Notice images={images4} title="We found jobs that you may be interested" timeAgo="2 days ago" />
				<Notice images={images5} title="Kyle Fisher and 17 others viewed your profile" timeAgo="9 hours" />
			</div>
		</div>
	);
}

export default NoticesMain;
