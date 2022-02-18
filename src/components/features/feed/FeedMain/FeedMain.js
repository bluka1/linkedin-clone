import styles from './FeedMain.module.css';
import NewPost from './NewPost/NewPost';

function FeedMain() {
	return (
		<div className={styles.feedMain}>
			<NewPost />
		</div>
	);
}

export default FeedMain;
