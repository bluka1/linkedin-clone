import ProfileCard from '../ProfileCard/ProfileCard';
import Card from '../Card/Card';

function Visitors() {
	return (
		<Card cardHeader="VISITORS" headerLink="VIEW ALL">
			<ProfileCard name="Darlene Black" description="HR-manager, 10000 connec..." />
			<ProfileCard name="Theresa Steward" description="iOS developer" />
			<ProfileCard name="Brandon Wilson" description="Senior UX designer" />
			<ProfileCard name="Kyle Fisher" description="Product designer at Com..." />
			<ProfileCard name="Audrey Alexander" description="Team lead at Google" />
		</Card>
	);
}

export default Visitors;
