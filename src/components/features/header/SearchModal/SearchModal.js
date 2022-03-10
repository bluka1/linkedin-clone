import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg';
import { ReactComponent as VectorIcon } from '../../../../assets/icons/vector.svg';
import GroupCard from '../../../core/GroupCard/GroupCard';
import Article from '../../../shared/Article/Article';
import NewArticleButton from '../../../shared/NewArticleButton/NewArticleButton';
import UserInfo from '../../../shared/UserInfo/UserInfo';

import styles from './SearchModal.module.css';

function SearchModal(props) {
	return (
		<>
			<div className={styles.searchModalBackground} onClick={props.onClick}></div>
			<div className={styles.searchModal}>
				<div className={styles.searchBar}>
					<input />
					<SearchIcon />
				</div>

				<div className={styles.searchJobs}>
					<div className={styles.searchJob}>
						<GroupCard imageSrc="/images/upwork.jpg" title="UX/UI Designer" subtitle="Upwork" Icon={VectorIcon} />
					</div>
					<div className={styles.searchJob}>
						<GroupCard
							imageSrc="/images/google.jpg"
							title="Part-time UX Designer"
							subtitle="Google"
							Icon={VectorIcon}
						/>
					</div>
					<Link to="/jobs">All jobs (84)</Link>
				</div>

				<div className={styles.searchUsers}>
					<div className={styles.searchUser}>
						<UserInfo
							imageSrc="/images/brandon.jpg"
							name="Brandon Wilson"
							description="Senior UX Designer"
							Icon={VectorIcon}
						/>
					</div>
					<div className={styles.searchUser}>
						<UserInfo
							imageSrc="/images/kyle.jpg"
							name="Kyle Fisher"
							description="Product designer at Commandor Corp."
							Icon={VectorIcon}
						/>
					</div>
					<Link to="/network">All users (1,530)</Link>
				</div>

				<div className={styles.searchArticles}>
					<div className={styles.searchArticle}>
						<Article
							size="small"
							imageSrc="/images/usability.jpg"
							title="A little about usability testing"
							subtitle="3,912 viewers"
							Icon={VectorIcon}
						/>
					</div>
					<Link to="/jobs">All articles (30)</Link>
				</div>
				<NewArticleButton text="All results (2,000+)" />
			</div>
		</>
	);
}

export default SearchModal;
