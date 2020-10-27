import { StyleSheet } from 'react-native';

import { hp, wp } from '../../services/responsive';
import typography from '../../constants/typography';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleText: {
		fontSize: wp(5),
		textAlign: 'center',
		fontFamily: typography.fontFamilyLight
	},
	loading: {
		marginTop: hp(5)
	}
});

export default styles;
