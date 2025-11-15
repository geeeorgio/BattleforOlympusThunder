import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(33),
  },
  emptyContainer: {
    width: '100%',
  },
  hiddenContainer: {
    opacity: 0,
    pointerEvents: 'none',
  },
  startButtonContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(20),
  },
  startButtonText: {
    fontSize: sp(20),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.black,
  },
});
