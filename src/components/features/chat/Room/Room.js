import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ReactComponent as PaperclipIcon } from '../../../../assets/icons/paperclip.svg';
import { ReactComponent as SendIcon } from '../../../../assets/icons/send.svg';
import SectionSeparator from '../../../shared/SectionSeparator/SectionSeparator';
import Message from './Message/Message';

import styles from './Room.module.css';

function Room(props) {
	const messagesFromKyle = [
		{
			name: 'Kyle Fisher',
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

	const messagesFromDarlene = [
		{
			name: 'Darlene Black',
			date: 'Today, 30 aug',
			content: {
				messages: [
					{
						sender: 'darlene',
						text: 'Hey, how is your project?',
						time: '8:20 AM',
						avatar: '/images/darlene.jpg',
						read: undefined,
					},
				],
			},
		},
	];

	const messagesFromTheresa = [
		{
			name: 'Theresa Steward',
			date: '2 days ago, 28 aug',
			content: {
				messages: [
					{
						sender: 'theresa',
						text: 'Hi, Dmitry! I have a work for you. Let me know when you are able to talk.',
						time: '2:20 PM',
						avatar: '/images/theresa.jpg',
						read: undefined,
					},
				],
			},
		},
	];

	const messagesFromBrandon = [
		{
			name: 'Brandon Wilson',
			date: '5 days ago, 25 aug',
			content: {
				messages: [
					{
						sender: 'dmitry',
						text: 'Hi, Brandon. How are you doing? Can I help you somehow?',
						time: '8:20 PM',
						avatar: '',
						read: true,
					},
					{
						sender: 'brandon',
						text: 'Yes, I am new here so I need help. Thank you!',
						time: '8:29 PM',
						avatar: '/images/brandon.jpg',
						read: undefined,
					},
					{
						sender: 'dmitry',
						text: 'Great. Tell me how can I help you.',
						time: '8:50 PM',
						avatar: '',
						read: true,
					},
					{
						sender: 'brandon',
						text: 'I am Russian and I am learning English. Do you know some good language school I can attend?',
						time: '8:55 PM',
						avatar: '/images/brandon.jpg',
						read: undefined,
					},
				],
			},
		},
	];

	const messagesFromAudrey = [
		{
			name: 'Audrey Aleyander',
			date: 'A week ago, 22 aug',
			content: {
				messages: [
					{
						sender: 'dmitry',
						text: 'Hi, Audrey! Just heard about you new position. I am really happy for you!',
						time: '10:20 AM',
						avatar: '',
						read: true,
					},
					{
						sender: 'audrey',
						text: 'Yeah my brother, I was really working hard to achieve it. But, tell me about your new position...',
						time: '10:29 AM',
						avatar: '/images/audrey.jpg',
						read: undefined,
					},
					{
						sender: 'dmitry',
						text: 'Yep, I also got new position but I already got used to it.',
						time: '10:40 AM',
						avatar: '',
						read: true,
					},
					{
						sender: 'audrey',
						text: 'When you got it?',
						time: '11:31 AM',
						avatar: '/images/audrey.jpg',
						read: undefined,
					},
				],
			},
		},
	];

	let messagesToRender = [];
	const location = useLocation();

	if (location.pathname.includes('darlene')) {
		messagesToRender = messagesFromDarlene;
	} else if (location.pathname.includes('theresa')) {
		messagesToRender = messagesFromTheresa;
	} else if (location.pathname.includes('brandon')) {
		messagesToRender = messagesFromBrandon;
	} else if (location.pathname.includes('kyle')) {
		messagesToRender = messagesFromKyle;
	} else if (location.pathname.includes('audrey')) {
		messagesToRender = messagesFromAudrey;
	}

	return (
		<div className={styles.room}>
			<div className={styles.roomHeader}>
				<div className={styles.roomHeaderContent}>
					<p>
						Chat with <span className={styles.roomHeaderName}>{messagesToRender[0].name}</span>
					</p>
					<p className={styles.lastOnline}>Last online: 4 hours ago</p>
				</div>
				<div className={styles.roomHeaderContent}>
					<PaperclipIcon />
					<p>shared media (12)</p>
				</div>
			</div>
			<div className={styles.roomMain}>
				{messagesToRender.map((item) => {
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
				<textarea placeholder="Write your message" wrap="soft"></textarea>
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
