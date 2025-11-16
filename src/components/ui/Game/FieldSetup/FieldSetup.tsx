import React from 'react';
import { FlatList } from 'react-native';

import CustomContainer from '../../CustomContainer/CustomContainer';
import GameField from '../GameField/GameField';

import { styles } from './styles';

import type { Cell } from 'src/utils';

interface FieldSetupProps {
  currentPlayerGrid: Cell[];
  onCellPress: (cellId: string) => void;
  isMainGame?: boolean;
}

const FieldSetup = ({
  currentPlayerGrid,
  onCellPress,
  isMainGame = false,
}: FieldSetupProps) => {
  return (
    <CustomContainer
      variant="red"
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      extraStyle={styles.fieldSetupContainer}
    >
      <FlatList
        data={currentPlayerGrid}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameField
            cell={item}
            onCellPress={onCellPress}
            isMainGame={isMainGame}
          />
        )}
        numColumns={5}
        scrollEnabled={false}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </CustomContainer>
  );
};

export default FieldSetup;
