import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(16),
  },
  gameBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameButton: {
    width: '100%',
    paddingVertical: hp(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameBtnText: {
    fontSize: sp(23),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
  },
  redBtnContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBtn: {
    width: '100%',
    paddingVertical: hp(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBtnText: {
    fontSize: sp(21),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.white,
  },
});
