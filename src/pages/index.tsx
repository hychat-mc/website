import { NextPage } from 'next';
import { Nav } from '../components/Nav';
import { Meta } from '../components/Meta';
import { Hero } from '../components/Hero';

const Index: NextPage = () => {
	return (
		<>
			<Meta />
			<Nav />
			<Hero />
		</>
	);
};

export default Index;
