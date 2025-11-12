import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(30),
    paddingHorizontal: wp(6),
  },
  contentWrapper: {
    width: '100%',
  },
  imageWrapper: {
    width: '100%',
    height: hp(333),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  frameContainer: {
    width: '100%',
  },
  title: {
    fontSize: sp(20),
    fontFamily: FONTS.UbuntuMedium,
    textAlign: 'center',
    marginBottom: hp(16),
  },
  description: {
    fontSize: sp(15),
    fontFamily: FONTS.UbuntuRegular,
    textAlign: 'center',
    marginBottom: hp(10),
  },
  bottomContainer: {
    marginTop: hp(33),
    width: '66%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(18),
  },
  buttonText: {
    fontSize: sp(19),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
  },
});
