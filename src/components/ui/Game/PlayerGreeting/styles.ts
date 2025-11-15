import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  playerGreeting: {
    width: '100%',
    minHeight: hp(100),
    overflow: 'hidden',
  },
  playerGreetingImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(8),
    gap: wp(6),
  },
  playerGreetingImage: {
    flex: 0.35,
    height: '100%',
  },
  playerGreetingText: {
    flex: 1,
    fontSize: sp(15),
    fontFamily: FONTS.UbuntuMedium,
    lineHeight: hp(22),
  },
});
