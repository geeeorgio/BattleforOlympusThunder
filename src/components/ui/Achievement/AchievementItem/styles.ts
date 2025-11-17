import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: hp(16),
    gap: wp(6),
  },
  imageWrapper: {
    flex: 0.33,
    aspectRatio: 1,
    minWidth: wp(80),
    minHeight: hp(80),
    maxWidth: wp(131),
    maxHeight: hp(131),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '88%',
    height: '88%',
  },
  textContainer: {
    flex: 1,
    paddingVertical: hp(6),
    paddingHorizontal: wp(12),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  name: {
    fontSize: sp(15),
    fontFamily: FONTS.UbuntuMedium,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(14),
    fontFamily: FONTS.UbuntuRegular,
    color: COLORS.white,
  },
  blurredDescription: {
    opacity: 0.9,
  },
  progressText: {
    fontSize: sp(11),
    fontFamily: FONTS.UbuntuRegular,
    color: COLORS.white,
    opacity: 0.8,
  },
  shareButtonContainer: {
    alignSelf: 'flex-end',
  },
  shareButtonWrapper: {
    borderRadius: wp(8),
    padding: wp(2),
  },
  shareButton: {
    paddingVertical: hp(4),
    paddingHorizontal: wp(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: sp(12),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
  },
});
