import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  btnsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(14),
  },
  lightningBtnContainer: {
    width: '33%',
    aspectRatio: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  lightningBtnImage: {
    flex: 0.75,
    width: '100%',
  },
  lightningTextContainer: {
    flex: 0.25,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  lightningBtnCountText: {
    fontSize: sp(18),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
  },
  backBtnContainer: {
    width: '15%',
    aspectRatio: 1,
    borderRadius: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backBtnContainerDisabled: {
    opacity: 0,
    pointerEvents: 'none',
  },
  backBtn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(6),
    overflow: 'hidden',
  },
  backBtnImage: {
    width: '75%',
    height: '75%',
  },
  nextPlayerBtnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextPlayerBtn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(22),
    paddingHorizontal: wp(50),
  },
  nextPlayerBtnText: {
    fontSize: sp(20),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
  },
});
