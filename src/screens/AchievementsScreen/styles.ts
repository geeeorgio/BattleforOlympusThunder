import { StyleSheet } from 'react-native';

import { wp, hp } from 'src/utils';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingVertical: hp(24),
    paddingHorizontal: wp(4),
  },
  listContent: {
    width: '100%',
  },
});
