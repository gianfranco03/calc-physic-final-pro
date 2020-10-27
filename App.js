import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';

import RootScreen from './src/screens/index';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<RootSiblingParent>
				<RootScreen />
			</RootSiblingParent>
		</SafeAreaView>
	);
};

export default App;
