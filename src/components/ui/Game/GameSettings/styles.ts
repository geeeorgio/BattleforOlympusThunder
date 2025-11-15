import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(60),
  },
  playerContainer: {
    width: '100%',
    height: hp(110),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(5),
  },
  imageContainer: {
    flex: 0.35,
    height: '100%',
    overflow: 'hidden',
    paddingTop: hp(6),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    flex: 0.65,
    height: '100%',
    padding: wp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: '100%',
    borderRadius: wp(8),
    padding: wp(6),
    backgroundColor: COLORS.white,
    color: COLORS.black,
    fontSize: sp(15),
    fontFamily: FONTS.UbuntuMedium,
  },
});
