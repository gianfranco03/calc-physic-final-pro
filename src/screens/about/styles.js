import { StyleSheet } from 'react-native';

import { hp, wp } from '../../services/responsive';
import typography from '../../constants/typography';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		height: hp(9),
		backgroundColor: colors.secondary,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	backText: {
		fontSize: wp(3.8),
		position: 'absolute',
		marginTop: hp(2.7),
		marginLeft: wp(5),
		fontFamily: typography.fontFamilyLight,
		color: colors.white
	},
	titleText: {
		fontSize: wp(5),
		fontFamily: typography.fontFamilyBold,
		color: colors.white
	},
	subTitle: {
		marginTop: hp(4),
		marginLeft: wp(5),
		fontSize: wp(4.5),
		color: colors.black,
		fontFamily: typography.fontFamilySemiBold
	},
	studensText: {
		marginTop: hp(2),
		marginLeft: wp(5),
		fontSize: wp(4),
		color: colors.gray,
		fontFamily: typography.fontFamilyRegular
	},
	list: {
		marginTop: hp(2),
		paddingHorizontal: wp(5)
	},
	listItem: {
		flexDirection: 'row',
		marginBottom: hp(1),
		paddingHorizontal: wp(5),
		justifyContent: 'space-between'
	},
	nameText: {
		width: '50%',
		fontSize: wp(3.5),
		textAlign: 'left',
		fontFamily: typography.fontFamilyRegular,
		color: colors.black
	},
	idText: {
		fontSize: wp(3.3),
		fontFamily: typography.fontFamilyRegular,
		color: colors.black
	}
});

export default styles;
