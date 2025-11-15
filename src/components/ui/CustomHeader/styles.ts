import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(5),
    height: hp(66),
    paddingHorizontal: wp(12),
  },
  backButtonContainer: {
    width: wp(66),
    height: hp(66),
    borderRadius: wp(18),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  backButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(18),
  },
  backButtonImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: wp(22),
    fontFamily: FONTS.UbuntuMedium,
    textAlign: 'center',
  },
});
