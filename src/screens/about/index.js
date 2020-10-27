import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const studens = [
	{ name: 'Hernández Juárez, Cristian Gianfranco', id: '1990-18-20568' },
	{ name: 'Xoyón Terraza, Erick Vinicio', id: '1990-18-17170' },
	{ name: 'García López, Martin de Dios', id: '1990-18-16149' },
	{ name: 'Cuamatzi Morales, BrandonArnulfo', id: '1990-19-7235' }
];

const AboutScreen = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.titleText}>Acerca de</Text>
			</View>
			<Text style={styles.backText} onPress={() => navigation.goBack()}>
				Regresar
			</Text>
			<Text style={styles.subTitle}>Proyecto Final Física II</Text>
			<Text style={styles.studensText}>Integrantes:</Text>
			<View style={styles.list}>
				{studens.map((item, index) => (
					<View style={styles.listItem} key={index}>
						<Text style={styles.nameText}>- {item.name}</Text>
						<Text style={styles.idText}>{item.id}</Text>
					</View>
				))}
			</View>
		</View>
	);
};

export default AboutScreen;
