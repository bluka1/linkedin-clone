import questionmarkIcon from '../../img/questionmark.svg';
import settingsIcon from '../../img/settings.svg';
import chevronIcon from '../../img/chevron-down.svg';

import styles from './Footer.module.css';
import logoIcon from '../../img/blue-logo.svg';

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerLogo}>
				<img src={logoIcon} alt="logo" />
				<p>
					Linked<span className={styles.logoText}>In</span>
				</p>
			</div>

			<div className={styles.footerNavigation}>
				<h3>Navigation</h3>
				<div className={styles.footerNavigationColumns}>
					<ul className={styles.footerNavigationList}>
						<li>About</li>
						<li>Careers</li>
						<li>Advertising</li>
						<li>Small business</li>
					</ul>
					<ul className={styles.footerNavigationList}>
						<li>Talent Solutions</li>
						<li>Marketing Solutions</li>
						<li>Sales Solutions</li>
						<li>Safery Center</li>
					</ul>
					<ul className={styles.footerNavigationList}>
						<li>Community Guidelines</li>
						<li>Privacy & Terms</li>
						<li>Mobile App</li>
					</ul>
				</div>
			</div>

			<div className={styles.footerFastAccess}>
				<h3>Fast access</h3>
				<div>
					<div>
						<span>QUESTIONS?</span>
						<img src={questionmarkIcon} alt="questionmark" />
					</div>
					<div>
						<span>SETTINGS</span>
						<img src={settingsIcon} alt="settings" />
					</div>
				</div>
			</div>

			<div className={styles.footerLanguage}>
				<h3>Language</h3>
				<div>
					<span>ENGLISH</span>
					<img src={chevronIcon} alt="settings" />
				</div>
			</div>
		</div>
	);
}

export default Footer;
