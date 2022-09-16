import { useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';

import logoImg from './../../assets/logo-nlw-esports.png';

import { styles } from './styles';
import { Heading } from './../../components/Heading';
import { GameCard } from './../../components/GameCard';

import { GAMES } from './../../utils/games';

export function Home() {
	useEffect(() => {
		fetch('http://192.168.10.100:3333/games')
			.then(response => response.json())
			.then(data => console.log(data));
	}, []);

	return (
		<View style={styles.container}>
			<Image source={logoImg} style={styles.logo} />

			<Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

			<FlatList
				contentContainerStyle={styles.contentList}
				data={GAMES}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <GameCard data={item} />}
				showsHorizontalScrollIndicator={false}
				horizontal
			/>
		</View>
	);
}
