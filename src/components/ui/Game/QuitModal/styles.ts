import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { COLORS } from 'src/constants/colors';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  dialog: {
    width: '80%',
    padding: hp(16),
    gap: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogWrapper: {
    gap: wp(16),
  },
  title: {
    fontSize: sp(20),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.white,
  },
  message: {
    fontSize: sp(16),
    fontFamily: FONTS.Montserrat,
    color: COLORS.white,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    padding: hp(20),
  },
  confirmText: {
    fontSize: sp(16),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.white,
  },
  cancelText: {
    fontSize: sp(16),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
  },
});
