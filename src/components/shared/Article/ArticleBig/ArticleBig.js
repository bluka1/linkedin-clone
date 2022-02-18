import styles from './ArticleBig.module.css';
import play from '../../../../assets/icons/play.svg';

function ArticleBig({ imageSrc, title, subtitle, articleType }) {
	return (
		<div className={styles.articleBig}>
			<div className={styles.picture}>
				{articleType === 'video' && (
					<span className={styles.hoverImg}>
						<img src={play} alt="play icon" />
					</span>
				)}
				<img src={imageSrc} alt="project or article picture" />
			</div>
			<p className={styles.title}>{title}</p>
			<p className={styles.subtitle}>{subtitle}</p>
		</div>
	);
}

export default ArticleBig;
