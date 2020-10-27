import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';

const FORMULAS = {
	ADD: 'ADD',
	DIVIDE: 'DIVIDE'
};

const data = [
	{
		title: 'Resistencia',
		screen: 'ResistanceScreen',
		types: { serie: FORMULAS.ADD, parallel: FORMULAS.DIVIDE },
		dimensional: 'Ω'
	},
	{
		title: 'Capacitancia',
		screen: 'ResistanceScreen',
		types: { serie: FORMULAS.DIVIDE, parallel: FORMULAS.ADD },
		dimensional: 'F'
	},
	{
		title: 'Inductancia',
		screen: 'ResistanceScreen',
		types: { serie: FORMULAS.ADD, parallel: FORMULAS.DIVIDE },
		dimensional: 'H'
	},
	{
		title: 'Acerca de',
		screen: 'AboutScreen',
		types: null
	}
];

const HomeScreen = (props) => {
	const { navigation } = props;

	const renderItem = ({ item, index }) => {
		return (
			<TouchableOpacity
				style={styles.listItem}
				onPress={() =>
					navigation.push(item.screen, {
						title: item.title,
						types: item.types,
						dimensional: item.dimensional
					})}
			>
				<Text style={styles.listText}>{item.title}</Text>
			</TouchableOpacity>
		);
	};

	const keyExtractor = (item, index) => index.toString();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.titleText}>Calculadora</Text>
			</View>
			<View style={styles.listContainer}>
				<FlatList style={styles.list} data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
			</View>
		</View>
	);
};

export default HomeScreen;
