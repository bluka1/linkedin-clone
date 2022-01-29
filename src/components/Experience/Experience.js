import freelance from '../../img/freelance.jpg';
import upwork from '../../img/upwork.jpg';
import ProfileMainCard from '../ProfileMainCard/ProfileMainCard';
import styles from './Experience.module.css';

function Experience() {
	return (
		<ProfileMainCard>
			<h3>Experience</h3>
			<div className={styles.experiences}>
				<div className={styles.experience}>
					<img src={freelance} alt="experience picture" />
					<div className={styles.experienceInfo}>
						<h5>Freelance UX/UI designer</h5>
						<p>Self Employed</p>&nbsp;<span>Around the world</span>
						<p>Jun 2016 — Present</p>&nbsp;<span>3 yrs 3 mos</span>
						<p>
							Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative
							landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.
						</p>
					</div>
				</div>
				<div className={styles.experience}>
					<img src={upwork} alt="experience picture" />
					<div className={styles.experienceInfo}>
						<h5>UX/UI designer</h5>
						<p>Upwork</p>&nbsp;<span>International</span>
						<p>Jun 2019 — Present</p>&nbsp;<span>3 mos</span>
						<p>
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
