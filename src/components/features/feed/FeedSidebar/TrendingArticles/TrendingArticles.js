import Article from '../../../../shared/Article/Article';
import Card from '../../../../core/Card/Card';
import styles from './TrendingArticles.module.css';

function TrendingArticles() {
	return (
		<Card cardHeader="Trending articles" background="secondary">
			<div className={styles.trendingArticles}>
				<Article
					size="small"
					imageSrc="/images/cool-design.jpg"
					title="How I make cool designs?"
					subtitle="6,340 viewers"
				/>
				<Article
					size="small"
					imageSrc="/images/advices.jpg"
					title="Advices for young HR-managers"
					subtitle="8,123 viewers"
				/>
				<Article
					size="small"
					imageSrc="/images/usability.jpg"
					title="A little about usability testing"
					subtitle="3,912 viewers"
				/>
			</div>
		</Card>
	);
}

export default TrendingArticles;
