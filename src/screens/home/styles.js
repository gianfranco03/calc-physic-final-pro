import { StyleSheet } from 'react-native';

import { hp, wp } from '../../services/responsive';
import typography from '../../constants/typography';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.gray5
	},
	header: {
		height: hp(10),
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleText: {
		fontSize: wp(5),
		fontFamily: typography.fontFamilyBold,
		color: colors.white
	},
	list: {
		marginTop: hp(2),
		paddingTop: wp(4),
		borderRadius: wp(2),
		marginHorizontal: wp(5)
	},
	listContainer: {},
	listItem: {
		width: '100%',
		height: hp(10),
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: hp(3),
		borderRadius: wp(2),
		paddingHorizontal: wp(5),
		backgroundColor: colors.white,
		shadowColor: colors.black,
		shadowOpacity: 10,
		shadowOffset: { x: 2, y: 0 },
		shadowRadius: 2,
		elevation: 1
	},
	listText: {
		fontFamily: typography.fontFamilyRegular,
		fontSize: wp(4.5),
		color: colors.black
	}
});

export default styles;
