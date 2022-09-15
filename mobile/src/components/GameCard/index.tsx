import React from 'react';
import {
	TouchableOpacity,
	TouchableOpacityProps,
	ImageBackground,
	ImageSourcePropType,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from './../../theme';

import { styles } from './styles';

export interface GameCardProps {
	id: string;
	name: string;
	ads: string;
	cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
	data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<ImageBackground style={styles.cover} source={data.cover}></ImageBackground>

			<LinearGradient colors={THEME.COLORS.FOOTER}></LinearGradient>
		</TouchableOpacity>
	);
}
