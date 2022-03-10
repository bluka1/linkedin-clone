import ArticleBig from './ArticleBig/ArticleBig';
import ArticleSmall from './ArticleSmall/ArticleSmall';

function Article({ size, ...props }) {
	return (
		<>
			{size === 'small' && <ArticleSmall {...props} />}
			{size === 'big' && <ArticleBig {...props} />}
		</>
	);
}

export default Article;
