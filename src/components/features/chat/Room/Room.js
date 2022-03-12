import { ReactComponent as PaperclipIcon } from '../../../../assets/icons/paperclip.svg';
import { ReactComponent as SendIcon } from '../../../../assets/icons/send.svg';
import SectionSeparator from '../../../shared/SectionSeparator/SectionSeparator';
import Message from './Message/Message';

import styles from './Room.module.css';

function Room(props) {
	const messages = [
		{
			date: 'Yesterday, 29 aug',
			content: {
				messages: [
					{
						sender: 'dmitry',
						text: 'Hi, Kyle. How are you doing? Did you get that job yesterday?',
						time: '4:20 PM',
						avatar: '',
						read: true,
					},
					{
						sender: 'kyle',
						text: 'Nope, they kicked me out of the office!',
						time: '4:29 PM',
						avatar: '/images/kyle.jpg',
						read: undefined,
					},
					{
						sender: 'dmitry',
						text: 'Wow! I can invite you in my new project. We need a product designer right now!',
						time: '4:30 PM',
						avatar: '',
						read: true,
					},
					{
						sender: 'kyle',
						text: 'It’ll be great! I need this job, but...',
						time: '4:31 PM',
						avatar: '/images/kyle.jpg',
						read: undefined,
					},
					{
						sender: 'kyle',
						text: 'So, it’s up to you!',
						time: '4:31 PM',
						avatar: '/images/kyle.jpg',
						read: undefined,
					},
				],
			},
		},
	];
	return (
		<div className={styles.room}>
			<div className={styles.roomHeader}>
				<div className={styles.roomHeaderContent}>
					<p>
						Chat with <span className={styles.roomHeaderName}>Kyle Fisher</span>
					</p>
					<p className={styles.lastOnline}>Last online: 4 hours ago</p>
				</div>
				<div className={styles.roomHeaderContent}>
					<PaperclipIcon />
					<p>shared media (12)</p>
				</div>
			</div>
			<div className={styles.roomMain}>
				{messages.map((item) => {
					return (
						<div key={Date.now() - Math.random()} className={styles.roomMainMessages}>
							<div className={styles.roomSectionSeparator}>
								<SectionSeparator>
									<span>{item.date}</span>
								</SectionSeparator>
							</div>

							{item.content.messages.map((message) => {
								return (
									<Message
										key={Date.now() - Math.random()}
										sender={message.sender}
										messageText={message.text}
										messageTime={message.time}
										imageSrc={message.avatar}
										read={message.read}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
			<div className={styles.roomFooter}>
				<input type="text" placeholder="Write your message" />
				<div className={styles.roomFooterIcons}>
					<PaperclipIcon />
					<div className={styles.roomFooterSendIcon}>
						<SendIcon />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Room;
