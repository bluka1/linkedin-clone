import styles from './Feed.module.css';
import FeedMain from './FeedMain/FeedMain';
import FeedSidebar from './FeedSidebar/FeedSidebar';

function Feed() {
	return (
		<div className={styles.feedContent}>
			<FeedMain />
			<FeedSidebar />
		</div>
	);
}

export default Feed;
