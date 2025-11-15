import { StyleSheet } from 'react-native';

import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  fieldSetupContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    padding: wp(16),
  },
  columnWrapper: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
