import styles from './FeedSidebar.module.css';
import Hashtags from './Hashtags/Hashtags';
import MyGroups from './MyGroups/MyGroups';
import NewArticleButton from './NewArticleButton/NewArticleButton';
import ProfileCard from './ProfileCard/ProfileCard';
import TrendingArticles from './TrendingArticles/TrendingArticles';

function FeedSidebar() {
	return (
		<div className={styles.feedSidebar}>
			<ProfileCard />
			<NewArticleButton />
			<MyGroups />
			<Hashtags />
			<TrendingArticles />
		</div>
	);
}

export default FeedSidebar;
