import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tableContainer: {
    width: '100%',
    minHeight: '60%',
    maxHeight: '80%',
    overflow: 'hidden',
  },
  listContent: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(6),
    paddingHorizontal: wp(8),
  },
  shareContainer: {
    width: '100%',
    maxWidth: wp(200),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(16),
  },
  shareButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(14),
    paddingHorizontal: wp(32),
  },
  shareButtonText: {
    fontSize: sp(16),
    fontFamily: FONTS.UbuntuMedium,
    textAlign: 'center',
    color: COLORS.black,
  },
});
