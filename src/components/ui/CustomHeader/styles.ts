import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    padding: wp(2),
  },
  backButtonImage: {
    width: wp(10),
    height: wp(10),
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: wp(16),
    fontFamily: FONTS.Montserrat,
    textAlign: 'center',
  },
});
