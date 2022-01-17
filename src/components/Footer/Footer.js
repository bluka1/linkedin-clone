import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import Select from '../Select/Select';

import { ReactComponent as questionmarkIcon } from '../../img/questionmark.svg';
import { ReactComponent as settingsIcon } from '../../img/settings.svg';
import { ReactComponent as LogoIcon } from '../../img/blue-logo.svg';
import styles from './Footer.module.css';

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.footerLogo}>
					<LogoIcon />
					<p>
						Linked<span className={styles.logoText}>In</span>
					</p>
				</div>

				<div className={styles.footerNavigation}>
					<h3>Navigation</h3>
					<div className={styles.footerNavigationColumns}>
						<ul className={styles.footerNavigationColumn}>
							<li>
								<Link to="/notimplemented">About</Link>
							</li>
							<li>
								<Link to="/notimplemented">Careers</Link>
							</li>
							<li>
								<Link to="/notimplemented">Advertising</Link>
							</li>
							<li>
								<Link to="/notimplemented">Small business</Link>
							</li>
						</ul>
						<ul className={styles.footerNavigationColumn}>
							<li>
								<Link to="/notimplemented">Talent Solutions</Link>
							</li>
							<li>
								<Link to="/notimplemented">Marketing Solutions</Link>
							</li>
							<li>
								<Link to="/notimplemented">Sales Solutions</Link>
							</li>
							<li>
								<Link to="/notimplemented">Safery Center</Link>
							</li>
						</ul>
						<ul className={styles.footerNavigationColumn}>
							<li>
								<Link to="/notimplemented">Community Guidelines</Link>
							</li>
							<li>
								<Link to="/notimplemented">Privacy & Terms</Link>
							</li>
							<li>
								<Link to="/notimplemented">Mobile App</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.footerFastAccess}>
					<h3>Fast access</h3>
					<Button text="QUESTIONS?" Icon={questionmarkIcon} variant="filled" iconPlacement="right" />
					<Button text="SETTINGS" Icon={settingsIcon} variant="outlined" iconPlacement="right" />
				</div>

				<div className={styles.footerLanguage}>
					<h3>Language</h3>
					<Select />
				</div>
			</div>
		</div>
	);
}

export default Footer;
