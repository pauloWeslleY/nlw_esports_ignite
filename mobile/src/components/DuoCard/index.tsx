import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { DuoInfo } from './../DuoInfo';

import { THEME } from '../../theme';
import { styles } from './styles';

export interface DuoCardProps {
	id: string;
	name: string;
	hourEnd: string;
	hourStart: string;
	useVoiceChannel: boolean;
	weekDays: string[];
	yearsPlaying: number;
}

interface Props {
	data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
	return (
		<View style={styles.container}>
			<DuoInfo label="Name" value={data.name} />
			<DuoInfo label="Tempo de jogo?" value={`${data.yearsPlaying} anos`} />
			<DuoInfo
				label="Dsiponibilidade"
				value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
			/>
			<DuoInfo
				label="Chamada de áudio?"
				value={data.useVoiceChannel ? 'Sim' : 'Não'}
				colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
			/>

			<TouchableOpacity style={styles.button}></TouchableOpacity>
		</View>
	);
}
