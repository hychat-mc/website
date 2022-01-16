import { Text, Link, VStack, SimpleGrid, Flex, Box } from '@chakra-ui/react';
import { CTAButton } from '../components/CTAButton';

export const Hero = () => {
	return (
		<>
			{/* Desktop */}
			<DesktopHero />

			{/* Mobile */}
			<MobileHero />
		</>
	);
};

const DesktopHero = () => {
	return (
		<Flex display={{ base: 'none', md: 'flex' }}>
			<SimpleGrid columns={[2, null, 0]} spacing={100}>
				<VStack w="full" h="full" py={[2, 4, 6, 8]} px={[50, 130, 196]} spacing={6} align="flex-start">
					<Text fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} fontWeight="black">
						Expand your community with a <Text color="green.200">guild chat bridge.</Text>
					</Text>
					<Text fontSize="2xl" fontWeight="light" color="white">
						Stay tuned for more information.
					</Text>
					<Link href="https://twitter.com/hychatmc" isExternal>
						<CTAButton />
					</Link>
				</VStack>
				<VStack w="full" h="full" py={[2, 4, 6, 8]} px={196} spacing={6} align="flex-start">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src="/discord.png" alt="Discord Example" />
				</VStack>
			</SimpleGrid>
		</Flex>
	);
};

const MobileHero = () => {
	return (
		<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
			<Flex justifyContent="center" alignItems="center" flexDirection="column" p={30} pt={125} textAlign="center">
				<Text fontSize="4xl" fontWeight="black">
					Expand your community with a <Text color="green.200">guild chat bridge.</Text>
				</Text>
				<Text fontSize="2xl" fontWeight="light" color="white" py={30}>
					Stay tuned for more information.
				</Text>
				<Box pb={10}>
					<Link href="https://twitter.com/hychatmc" isExternal>
						<CTAButton />
					</Link>
				</Box>
				<Box pl={1}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img src="/discord.png" alt="Discord Example" />
				</Box>
			</Flex>
		</Flex>
	);
};
