import React from 'react';
import { View, Text } from 'react-native';

import AppNavigator from '../navigation/index';

const RootScreen = () => {
	return (
		<View style={{ flex: 1 }}>
			<AppNavigator />
		</View>
	);
};

export default RootScreen;
