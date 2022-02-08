import freelance from '../../../../../img/freelance.jpg';
import upwork from '../../../../../img/upwork.jpg';
import Avatar from '../../../../core/Avatar/Avatar';
import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';
import styles from './Experience.module.css';

function Experience() {
	return (
		<ProfileMainCard>
			<h3>Experience</h3>
			<div className={styles.experiences}>
				<div className={styles.experience}>
					<Avatar imageSrc={freelance} size="xl" />
					<div className={styles.experienceInfo}>
						<h5>Freelance UX/UI designer</h5>
						<p>
							<span>Self Employed</span>&emsp;
							<span className={styles.greyish}>Around the world</span>
						</p>
						<p className={styles.periodPart}>
							<span className={styles.greyish}>Jun 2016 — Present</span>&emsp;
							<span className={styles.period}>3 yrs 3 mos</span>
						</p>
						<p className={styles.description}>
							Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative
							landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.
						</p>
					</div>
				</div>
				<div className={styles.experience}>
					<Avatar imageSrc={upwork} size="xl" />
					<div className={styles.experienceInfo}>
						<h5>UX/UI designer</h5>
						<p>
							<span>Upwork</span>&emsp;<span className={styles.greyish}>International</span>
						</p>
						<p className={styles.periodPart}>
							<span className={styles.greyish}>Jun 2019 — Present</span>&emsp;
							<span className={styles.period}>3 mos</span>
						</p>
						<p className={styles.description}>
							New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design,
							UX research.
						</p>
					</div>
				</div>
			</div>
		</ProfileMainCard>
	);
}

export default Experience;
