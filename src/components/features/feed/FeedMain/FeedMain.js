import Select from '../../../core/Select/Select';
import SectionSeparator from '../../../shared/SectionSeparator/SectionSeparator';
import styles from './FeedMain.module.css';
import NewPost from './NewPost/NewPost';

function FeedMain() {
	return (
		<div className={styles.feedMain}>
			<NewPost />
			<SectionSeparator>
				sort by:
				<select className={styles.separatorSelect}>
					<option>Trending</option>
					<option>Date</option>
				</select>
			</SectionSeparator>
		</div>
	);
}

export default FeedMain;
