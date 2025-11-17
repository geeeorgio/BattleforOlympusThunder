import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: hp(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeColumn: {
    flex: 0.25,
    paddingHorizontal: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: wp(1),
    borderRightColor: COLORS.borderColor,
  },
  placeButton: {
    width: '90%',
    padding: wp(4),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellowBtnText: {
    color: COLORS.black,
  },
  regularPlaceButton: {
    backgroundColor: COLORS.grey,
  },
  topPlaceText: {
    fontSize: sp(16),
    fontFamily: FONTS.UbuntuMedium,
    textAlign: 'center',
  },
  regularPlaceText: {
    fontSize: sp(14),
    fontFamily: FONTS.UbuntuRegular,
    textAlign: 'center',
  },
  playersColumn: {
    paddingHorizontal: wp(4),
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: wp(1),
    borderRightColor: COLORS.borderColor,
  },
  victoriesColumn: {
    paddingHorizontal: wp(4),
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    width: wp(1),
    height: '100%',
    backgroundColor: COLORS.borderColor,
  },
});
