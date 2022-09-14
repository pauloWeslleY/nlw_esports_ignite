import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>What is your name?</Text>
			<Text style={styles.title}>My name is Weslley foundation this APP</Text>

			<Button title="Touch Here!" />
			<Button title="Click Here!" />

			<StatusBar style="auto" backgroundColor="#edf2f4" />
		</View>
	);
}

interface ButtonProps {
	title: string;
}

function Button(props: ButtonProps) {
	return (
		<TouchableOpacity>
			<Text>{props.title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2b2d42',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: '#d90429',
		fontSize: 22,
		textTransform: 'uppercase',
		padding: 25,
	},
});
