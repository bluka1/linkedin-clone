import { useState } from 'react';
import { ReactComponent as FileIcon } from '../../../../assets/icons/filetext.svg';
import ExpandButton from '../../../core/ExpandButton/ExpandButton';
import Attachment from '../../../shared/Attachment/Attachment';
import SectionSeparator from '../../../shared/SectionSeparator/SectionSeparator';
import styles from './FeedMain.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import PostBody from './Post/PostBody/PostBody';
import PostFooter from './Post/PostFooter/PostFooter';
import PostHeader from './Post/PostHeader/PostHeader';

function FeedMain() {
	const [shown, setShown] = useState(false);

	const shownHandler = () => {
		setShown((prevState) => !prevState);
	};

	return (
		<div className={styles.feedMain}>
			<NewPost />
			<SectionSeparator>
				sort by:
				<select className={styles.separatorSelect}>
					<option>Trending</option>
					<option>Date</option>
				</select>
			</SectionSeparator>
			<Post>
				<PostHeader>
					<p>
						<a>Ted Bell</a>, <a>Annette Nguyen</a> and <a>Cody Hawkins</a> liked this
					</p>
				</PostHeader>
				<PostBody imageSrc="/images/theresa.jpg" name="Theresa Steward" description="iOS developer">
					<p>
						What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced
						all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The
						Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).
					</p>
					{shown && (
						<>
							<p>
								What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t
								practiced all summer? What was it to the Dursleys if Harry went back to school without any of his
								homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their
								veins).
							</p>
							<p>
								What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t
								practiced all summer? What was it to the Dursleys if Harry went back to school without any of his
								homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their
								veins).
							</p>
						</>
					)}
					<ExpandButton onClick={shownHandler}>{shown ? 'Collapse post' : 'Read more'}</ExpandButton>
				</PostBody>
				<PostFooter likes={42} comments={9} />
			</Post>
			<Post>
				<PostHeader>
					<p>
						<a>Audrey Alexander</a> comment this
					</p>
				</PostHeader>
				<PostBody imageSrc="/images/kyle.jpg" name="Kyle Fisher" description="Product designer at Commandor Corp.">
					<p>How’s your day going, guys?</p>
					<img src="/images/notebook.jpg" alt="post image" />
				</PostBody>
				<PostFooter likesFilled likes={12} comments={3} />
			</Post>
			<Post>
				<PostHeader>
					<p>High rated post from your feed</p>
				</PostHeader>
				<PostBody imageSrc="/images/brandon.jpg" name="Brandon Wilson" description="Senior UX designer">
					<p>There is some new guidelines for iOS</p>
					<div className={styles.attachments}>
						<Attachment Icon={FileIcon} title="iOS 11 guidelines for UX/UI designers" subtitle="PDF file, 324 kb" />
						<Attachment Icon={FileIcon} title="iOS 11 guidelines for developers" subtitle="PDF file, 245 kb" />
					</div>
				</PostBody>
				<PostFooter likesFilled likes={89} commentsFilled comments={7} />
			</Post>
			<Post>
				<PostHeader>
					<p>
						First post from <a>Audrey Alexander</a>
					</p>
				</PostHeader>
				<PostBody imageSrc="/images/audrey.jpg" name="Audrey Alexander" description="Team lead at Google">
					<p>
						The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I
						ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from
						you, grey wolf!» says the bun and runs away.
					</p>
				</PostBody>
				<PostFooter likes={10} comments={0} />
			</Post>
		</div>
	);
}

export default FeedMain;
