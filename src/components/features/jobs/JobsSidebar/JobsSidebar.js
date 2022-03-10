import NewArticleButton from '../../../shared/NewArticleButton/NewArticleButton';
import MySearches from './MySearches/MySearches';
import ArticlesForYou from './ArticlesForYou/ArticlesForYou';
import TrackedJobs from './TrackedJobs/TrackedJobs';

import styles from './JobsSidebar.module.css';

function JobsSidebar() {
	return (
		<div className={styles.jobsSidebar}>
			<NewArticleButton text="post a job" />
			<MySearches />
			<TrackedJobs />
			<ArticlesForYou />
		</div>
	);
}

export default JobsSidebar;
