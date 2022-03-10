import Card from '../../../../core/Card/Card';
import Article from '../../../../shared/Article/Article';

import styles from './ArticlesForYou.module.css';

function ArticlesForYou() {
	return (
		<Card cardHeader="Articles for you" background="secondary">
			<div className={styles.articlesForYou}>
				<Article
					size="small"
					imageSrc="/images/guide.jpg"
					title="The guide.	Apply for a job"
					subtitle="12,932 viewers"
				/>
				<Article
					size="small"
					imageSrc="/images/dreamjob.jpg"
					title="Your dream job	and how you can get it"
					subtitle="9,112 viewers"
				/>
				<Article
					size="small"
					imageSrc="/images/findjob.jpg"
					title="Now you know it. 15 steps to find job"
					subtitle="7,221 viewers"
				/>
			</div>
		</Card>
	);
}

export default ArticlesForYou;
