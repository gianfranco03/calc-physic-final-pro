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
	listContainer: {
		marginTop: hp(5),
		height: hp(45)
	},
	list: {
		borderRadius: wp(2),
		marginHorizontal: wp(5),
		paddingVertical: wp(4),
		paddingHorizontal: wp(4),
		backgroundColor: '#e6e6e6'
	},
	listItem: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
		backgroundColor: colors.white,
		borderRadius: wp(2),
		marginBottom: hp(2),
		height: hp(8),
		paddingHorizontal: wp(2)
	},
	listInputText: {
		height: hp(5.5),
		width: wp(25),
		borderRadius: wp(1),
		borderColor: colors.gray,
		borderWidth: 0.2,
		color: colors.black,
		fontFamily: typography.fontFamilyRegular,
		paddingBottom: hp(0.5),
		paddingLeft: wp(3)
	},
	listSelectContent: {
		width: wp(30),
		height: hp(5.5),
		justifyContent: 'center',
		borderColor: 'gray',
		borderWidth: 0.2,
		borderRadius: wp(1)
	},
	deleteText: {
		fontFamily: typography.fontFamilyLight,
		fontSize: wp(3),
		color: colors.gray30
	},
	footer: {
		height: wp(7)
	},
	listFooter: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: wp(4)
	},
	addButton: {
		height: hp(6),
		width: wp(25),
		borderRadius: wp(2),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primary
	},
	addText: {
		color: colors.white,
		fontFamily: typography.fontFamilyLight,
		fontSize: wp(3.5)
	},
	buttonsContainer: {
		marginTop: hp(3),
		justifyContent: 'center',
		flexDirection: 'row'
	},
	typeButton: {
		height: hp(6),
		width: wp(28),
		borderRadius: wp(2),
		marginLeft: wp(5),
		justifyContent: 'center',
		alignItems: 'center'
	},
	typeButtonSelected: {
		backgroundColor: colors.tertiary
	},
	typeButtonNormal: {
		backgroundColor: colors.fourth
	},
	optionText: {
		fontSize: wp(3.5),
		color: colors.white
	},
	optionTextSelected: {
		fontFamily: typography.fontFamilySemiBold
	},
	optionTextNormal: {
		fontFamily: typography.fontFamilyLight
	},
	calculateButton: {
		marginTop: hp(3),
		alignSelf: 'center',
		height: hp(6),
		width: wp(30),
		borderRadius: wp(2),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.primary
	},
	calculateText: {
		color: colors.white,
		fontFamily: typography.fontFamilyBold,
		fontSize: wp(4)
	},
	result: {
		fontSize: wp(4.3),
		fontFamily: typography.fontFamilyBold,
		color: colors.black,
		alignSelf: 'center',
		marginTop: hp(2)
	}
});

export const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 16,
		paddingVertical: 12,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		color: 'black',
		paddingRight: 30 // to ensure the text is never behind the icon
	},
	inputAndroid: {
		fontSize: wp(4),
		paddingHorizontal: wp(3),
		paddingVertical: hp(1),
		borderWidth: 0.5,
		borderColor: 'purple',
		fontFamily: typography.fontFamilyRegular,
		borderRadius: 8,
		color: 'black',
		paddingRight: 30 // to ensure the text is never behind the icon
	}
});

export default styles;
