import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dialogWrapper: {
    gap: wp(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: '80%',
    padding: hp(16),
    gap: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
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
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    padding: wp(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(18),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
  },
});
