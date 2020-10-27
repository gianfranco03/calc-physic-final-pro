import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles';
import colors from '../../constants/colors';

const SplashScreen = (props) => {
	const { navigation } = props;
	const [ loading, showLoading ] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			showLoading(true);
		}, 500);

		setTimeout(() => {
			navigation.replace('HomeScreen');
		}, 2000);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.titleText}>Calculadora de Resistencias, Capacitancias </Text>
			<Text style={styles.titleText}>e Inductores</Text>
			{loading ? <ActivityIndicator style={styles.loading} size="large" color={colors.primary} /> : null}
		</View>
	);
};

export default SplashScreen;
