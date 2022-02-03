import styles from './Article.module.css';
import ArticleBig from './ArticleBig/ArticleBig';
import ArticleSmall from './ArticleSmall/ArticleSmall';

function Article({ source, title, subtitle, articleType, size }) {
	return (
		<>
			{size === 'small' && <ArticleSmall title={title} subtitle={subtitle} articleType={articleType} source={source} />}
			{size === 'big' && <ArticleBig source={source} title={title} subtitle={subtitle} />}
		</>
	);
}

export default Article;
