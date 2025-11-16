import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    aspectRatio: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    marginBottom: hp(16),
  },
  title: {
    fontSize: sp(22),
    fontFamily: FONTS.UbuntuMedium,
    textAlign: 'center',
    marginBottom: hp(16),
  },
  description: {
    fontSize: sp(15),
    fontFamily: FONTS.UbuntuRegular,
    color: COLORS.white,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    gap: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: wp(10),
    paddingHorizontal: wp(66),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(18),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
    textAlign: 'center',
  },
  homebutton: {
    width: '100%',
    paddingVertical: wp(10),
    paddingHorizontal: wp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontSize: sp(16),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.white,
    textAlign: 'center',
  },
});
