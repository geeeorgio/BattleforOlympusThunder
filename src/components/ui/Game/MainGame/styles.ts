import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerGridContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    minHeight: 0,
  },
  playerInfoContainer: {
    width: '100%',
    height: '40%',
    borderRadius: wp(15),
    minWidth: wp(50),
    maxWidth: wp(60),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp(4),
    gap: wp(4),
  },
  playerGridImage: {
    transform: [{ rotate: '-90deg' }],
    flex: 1,
    width: '100%',
    height: '100%',
  },
  playerNameText: {
    flex: 1,
    fontSize: sp(10),
    fontFamily: FONTS.UbuntuMedium,
    color: COLORS.white,
    textAlignVertical: 'center',
    transform: [{ rotate: '-90deg' }],
  },
  field: {
    flex: 1,
    minWidth: 0,
    minHeight: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: '100%',
    paddingLeft: wp(60),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(6),
    minHeight: wp(40),
    maxHeight: wp(60),
  },
  dividerIcon: {
    width: wp(40),
    height: wp(40),
    maxWidth: '25%',
    maxHeight: wp(50),
  },
});
