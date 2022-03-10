import SectionSeparator from '../../../shared/SectionSeparator/SectionSeparator';
import Notice from './Notice/Notice';

import styles from './NoticesMain.module.css';

function NoticesMain() {
	const images1 = ['/images/upwork.jpg', '/images/facebook.jpg', '/images/google.jpg'];
	const images2 = [];
	const images3 = [];
	const images4 = [];
	const images5 = [];

	return (
		<div className={styles.noticesMain}>
			<SectionSeparator>
				<span>recent</span>
			</SectionSeparator>

			<div className={styles.noticesContent}>
				<Notice images={images1} title="You appeared in 9 searches this week" timeAgo="3 hours" />
				<Notice images={images2} title="Audrey Alexander and 10 others viewed your profile" timeAgo="9 hours" />
				<Notice
					images={images3}
					title="Eduardo Russel and 4 others liked your post «1,000 connections! My network growth, so many bla bla bla"
					timeAgo="12 hours"
				/>
			</div>

			<SectionSeparator>
				<span>earlier</span>
			</SectionSeparator>

			<div className={styles.noticesContent}>
				<Notice images={images4} title="We found jobs that you may be interested" timeAgo="2 days ago" />
				<Notice images={images5} title="Kyle Fisher and 17 others viewed your profile" timeAgo="9 hours" />
			</div>
		</div>
	);
}

export default NoticesMain;
