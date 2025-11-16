import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: wp(10),
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 0,
    margin: wp(6),
  },
  lightningIcon: {
    width: '80%',
    height: '80%',
  },
  missMarker: {
    width: '50%',
    height: '50%',
  },
  hitMarker: {
    backgroundColor: COLORS.green,
  },
});
