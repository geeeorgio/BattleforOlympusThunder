import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: hp(6),
    paddingBottom: hp(12),
    borderBottomWidth: hp(1.5),
    borderBottomColor: COLORS.borderColor,
  },
  placeColumn: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playersColumn: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  victoriesColumn: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: sp(12),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.white,
    textAlign: 'center',
  },
});
