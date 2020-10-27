import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import styles, { pickerSelectStyles } from './styles';

import { showToast } from '../../components/toast';

import { DIMENSIONAL } from '../../constants/dimensional';
import { addFormula, divideFormula } from '../../services/formulas';

const defaultValue = {
	value: null,
	dim: DIMENSIONAL[10].value
};

const ResistanceScreen = (props) => {
	const { navigation, route: { params: { title, types, dimensional } } } = props;
	const [ data, setData ] = useState([ defaultValue, defaultValue ]);
	const [ toggleButton, setButton ] = useState(true);
	const [ result, setResult ] = useState(null);

	const setValue = (index, value = null, dim = DIMENSIONAL[10].value) => {
		let dataAux = data;
		const newItem = {
			value,
			dim
		};

		dataAux[index] = newItem;

		setResult(null);
		setData(dataAux);
	};

	const insertItem = () => {
		const dataAux = data;

		dataAux.push(defaultValue);

		setResult(null);
		setData([ ...dataAux ]);
	};

	const deleteItem = (index) => {
		let dataAux = data;

		if (dataAux.length > 2) {
			dataAux.splice(index, 1);

			setResult(null);
			setData([ ...dataAux ]);
		}
		else {
			showToast({ text: 'Ingresar dos valores mínimo.' });
		}
	};

	const keyExtractor = (item, index) => 'val-' + index.toString();

	const renderItem = ({ item, index }) => {
		return (
			<View style={styles.listItem}>
				<TextInput
					value={item.value}
					style={styles.listInputText}
					keyboardType="numeric"
					onChangeText={(text) => setValue(index, text, item.type)}
				/>
				<View style={styles.listSelectContent}>
					<RNPickerSelect
						placeholder={{
							label: 'Seleccione una opción...',
							value: DIMENSIONAL[10].value,
							color: 'black'
						}}
						style={pickerSelectStyles}
						onValueChange={(val) => setValue(index, item.value, val)}
						items={DIMENSIONAL}
					/>
				</View>
				<Text style={styles.deleteText} onPress={() => deleteItem(index)}>
					Eliminar
				</Text>
			</View>
		);
	};

	const renderListFooter = () => (
		<View style={styles.listFooter}>
			<TouchableOpacity style={styles.addButton} onPress={() => insertItem()}>
				<Text style={styles.addText}>Agregar</Text>
			</TouchableOpacity>
		</View>
	);

	const setButtonType = (value) => {
		if (value !== toggleButton) {
			setButton(!toggleButton);
		}
	};

	const calcule = () => {
		let res = 0;
		if (toggleButton) {
			if (types.serie == 'ADD') {
				res = addFormula(data);
			}
			else {
				res = divideFormula(data);
			}
		}
		else {
			if (types.parallel == 'ADD') {
				res = addFormula(data);
			}
			else {
				res = divideFormula(data);
			}
		}
		setResult(`${res} ${dimensional}`);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.titleText}>{title}</Text>
			</View>
			<Text style={styles.backText} onPress={() => navigation.goBack()}>
				Regresar
			</Text>
			<View>
				<View style={styles.listContainer}>
					<FlatList
						style={styles.list}
						data={data}
						extraData={data}
						renderItem={renderItem}
						keyExtractor={keyExtractor}
						ListFooterComponent={() => <View style={styles.footer} />}
					/>
				</View>
				{renderListFooter()}
				<View style={styles.buttonsContainer}>
					<TouchableOpacity
						onPress={() => setButtonType(true)}
						style={[
							styles.typeButton,
							toggleButton ? styles.typeButtonSelected : styles.typeButtonNormal
						]}
					>
						<Text
							style={[
								styles.optionText,
								toggleButton ? styles.optionTextSelected : styles.optionTextNormal
							]}
						>
							En Serie
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setButtonType(false)}
						style={[
							styles.typeButton,
							!toggleButton ? styles.typeButtonSelected : styles.typeButtonNormal
						]}
					>
						<Text
							style={[
								styles.optionText,
								!toggleButton ? styles.optionTextSelected : styles.optionTextNormal
							]}
						>
							En Paralelo
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity style={styles.calculateButton} onPress={() => calcule()}>
					<Text style={styles.calculateText}>Calcular</Text>
				</TouchableOpacity>
				<Text style={styles.result}>Resultado: {result}</Text>
			</View>
		</View>
	);
};

export default ResistanceScreen;
