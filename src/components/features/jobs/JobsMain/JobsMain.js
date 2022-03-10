import NewPost from '../../../shared/NewPost/NewPost';
import SectionSeparator from '../../../shared/SectionSeparator/SectionSeparator';
import Job from './Job/Job';

import { ReactComponent as SlidersIcon } from '../../../../assets/icons/sliders.svg';
import { ReactComponent as SearchWhiteIcon } from '../../../../assets/icons/search-white.svg';

import styles from './JobsMain.module.css';

function JobsMain() {
	const icons = [SlidersIcon, SearchWhiteIcon];

	return (
		<div className={styles.jobsMain}>
			<NewPost title="Your dream job is here" placeholder="Search jobs" icons={icons} />
			<div className={styles.sectionSeparator}>
				<SectionSeparator>
					<span>jobs for you</span>
				</SectionSeparator>
			</div>
			<Job
				imageSrc="/images/upwork.jpg"
				title="UX/UI designer"
				publisher="Upwork"
				location="Remote only"
				jobText="On Upwork you'll find a range of top freelancers and agencies, from developers and development agencies to designers and creative agencies, copywriters,"
			/>
			<Job
				imageSrc="/images/facebook.jpg"
				title="Product designer"
				publisher="Facebook"
				location="CA, USA"
				jobText="Founded in 2004, Facebook's mission is to give people the power to build community and bring the world closer together. People use our products to stay.."
			/>
			<Job
				imageSrc="/images/google.jpg"
				title="Part-time UX designer"
				publisher="Google"
				location="International"
				jobText="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking."
			/>
			<Job
				imageSrc="/images/linkedin.jpg"
				title="Web designer"
				publisher="LinkedIn"
				location="CA, USA"
				jobText="LinkedIn, the world's largest professional network. The mission of LinkedIn is simple: connect the world's professional."
			/>
			<div className={styles.sectionSeparator}>
				<SectionSeparator>
					<span>new jobs</span>
				</SectionSeparator>
			</div>
			<Job
				imageSrc="/images/instagram.jpg"
				title="UI designer"
				publisher="Instagram"
				location="CA, USA"
				jobText="Instagram is a photo and video-sharing social networking service owned by Facebook, Inc. "
			/>
			<Job
				imageSrc="/images/periscope.jpg"
				title="Product designer"
				publisher="Periscope"
				location="Remote only"
				jobText="eriscope is a live video streaming app for Android and iOS developed by Kayvon Beykpour and Joe Bernstein and acquired by Twitter before launch in 2015."
			/>
		</div>
	);
}

export default JobsMain;
