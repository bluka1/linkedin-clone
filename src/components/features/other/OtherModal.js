import React from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as XIcon } from '../../../assets/icons/x.svg';
import { ReactComponent as QuestionIcon } from '../../../assets/icons/questionmark.svg';
import { ReactComponent as BookIcon } from '../../../assets/icons/book-open.svg';
import { ReactComponent as InsightsIcon } from '../../../assets/icons/insights.svg';
import { ReactComponent as GroupsIcon } from '../../../assets/icons/groups.svg';
import { ReactComponent as SalaryIcon } from '../../../assets/icons/salary.svg';
import { ReactComponent as AdvertiseIcon } from '../../../assets/icons/advertise.svg';
import { ReactComponent as ProfinderIcon } from '../../../assets/icons/profinder.svg';
import { ReactComponent as SlideshareIcon } from '../../../assets/icons/slideshare.svg';

import styles from './OtherModal.module.css';
import ServiceButton from './ServiceButton/ServiceButton';

function OtherModal(props) {
	return (
		<>
			<div className={styles.otherModalBackground}></div>
			<div className={styles.otherModalContainer}>
				<button className={styles.closeButton} onClick={props.hideModal}>
					<XIcon />
					<p>close</p>
				</button>
				<div className={styles.otherModal}>
					<div className={styles.otherModalTitle}>
						<h5>More on LinkedIn</h5>
						<button className={styles.helpButton}>
							<QuestionIcon />
							<p>Help</p>
						</button>
					</div>
					<div className={styles.otherModalContent}>
						<ServiceButton
							big
							Icon={BookIcon}
							title="Learning with LinkedIn"
							subtitle="Courses, lectures, workshops"
							blue={true}
						/>
						<div className={styles.otherModalOptions}>
							<ServiceButton Icon={InsightsIcon} title="insights" />
							<ServiceButton Icon={GroupsIcon} title="groups" />
							<ServiceButton Icon={SalaryIcon} title="salary" />
							<ServiceButton Icon={AdvertiseIcon} title="advertise" />
							<ServiceButton Icon={ProfinderIcon} title="profinder" />
							<ServiceButton Icon={SlideshareIcon} title="slideshare" />
						</div>
					</div>
					<div className={styles.otherModalServices}>
						<h5 className={styles.servicesTitle}>Business services</h5>
						<ServiceButton big title="Talent Solutions" subtitle="Find, attract and recruit talent" />
						<ServiceButton big title="Sales Solutions" subtitle="Unlock sales opportunities" />
						<ServiceButton big title="Post a job" subtitle="Get your job in front of quality candidates" />
						<ServiceButton big title="Marketing Solutions" subtitle="Acquire customers and grow your business" />
						<ServiceButton big title="Learning Solutions" subtitle="Develop talent across your organisation" />
					</div>
					<div className={styles.otherModalPremium}>
						<ServiceButton
							big
							title="LinkedIn Premium"
							subtitle="Special features only for premium userss"
							gold={true}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default OtherModal;
