import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingHorizontal: wp(0),
    paddingVertical: hp(20),
    justifyContent: 'center',
    gap: hp(50),
    alignItems: 'center',
  },
  frameContainer: {
    width: '100%',
  },
  introContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp(12),
  },
  logoContainer: {
    flex: 0.35,
    aspectRatio: 1,
    overflow: 'hidden',
    borderWidth: wp(1),
    borderColor: COLORS.borderColor,
    borderRadius: wp(12),
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flex: 0.65,
  },
  title: {
    fontSize: sp(10),
    fontFamily: FONTS.UbuntuRegular,
    textAlign: 'justify',
    lineHeight: hp(14),
  },
  shareContainer: {
    width: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(11),
  },
  shareButtonText: {
    fontSize: sp(13),
    fontFamily: FONTS.UbuntuMedium,
    textAlign: 'center',
    color: COLORS.black,
  },
  homeMenuContainer: {
    width: '100%',
    paddingHorizontal: wp(44),
  },
});
