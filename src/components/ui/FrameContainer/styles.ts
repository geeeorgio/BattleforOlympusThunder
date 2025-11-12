import { StyleSheet } from 'react-native';

import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: '100%',
    aspectRatio: 1.48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    paddingHorizontal: wp(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
