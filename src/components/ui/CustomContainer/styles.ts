import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(22),
  },
  yellow: { borderColor: 'transparent', borderWidth: 0 },
  red: { borderColor: COLORS.borderColor, borderWidth: wp(2) },
  grey: {
    borderColor: 'transparent',
    borderWidth: wp(0),
  },
});
