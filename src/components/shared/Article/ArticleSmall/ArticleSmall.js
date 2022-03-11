import styles from './ArticleSmall.module.css';
import play from '../../../../assets/icons/play.svg';

function ArticleSmall({ imageSrc, title, subtitle, articleType, Icon }) {
	return (
		<div className={styles.articleSmall}>
			<div className={styles.picture}>
				{articleType === 'video' && (
					<span className={styles.hoverImg}>
						<img src={play} alt="play icon" />
					</span>
				)}
				<img src={imageSrc} alt="course picture" />
			</div>
			<div className={styles.description}>
				<div>
					<p className={styles.title}>{title}</p>
					<p className={styles.subtitle}>{subtitle}</p>
				</div>
				{Icon && (
					<div className={styles.articleIcon}>
						<Icon />
					</div>
				)}
			</div>
		</div>
	);
}

export default ArticleSmall;
