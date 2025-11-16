import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: hp(16),
    gap: wp(12),
    paddingHorizontal: wp(16),
  },
  imageWrapper: {
    width: wp(80),
    height: wp(80),
    minWidth: wp(70),
    minHeight: wp(70),
    maxWidth: wp(100),
    maxHeight: wp(100),
    borderRadius: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(2),
    borderColor: COLORS.borderColor,
  },
  icon: {
    width: '80%',
    height: '80%',
  },
  textContainer: {
    flex: 1,
    borderRadius: wp(12),
    padding: wp(12),
    borderWidth: wp(2),
    borderColor: COLORS.borderColor,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: sp(16),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.white,
    marginBottom: hp(4),
  },
  description: {
    fontSize: sp(12),
    fontFamily: FONTS.UbuntuRegular,
    color: COLORS.white,
    lineHeight: hp(16),
  },
  blurredDescription: {
    opacity: 0.7,
  },
  progressText: {
    fontSize: sp(11),
    fontFamily: FONTS.UbuntuRegular,
    color: COLORS.white,
    marginTop: hp(4),
    opacity: 0.8,
  },
  shareButtonContainer: {
    marginTop: hp(8),
    alignSelf: 'flex-end',
  },
  shareButtonWrapper: {
    borderRadius: wp(8),
    padding: wp(2),
  },
  shareButton: {
    paddingVertical: hp(6),
    paddingHorizontal: wp(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: sp(12),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
  },
});
