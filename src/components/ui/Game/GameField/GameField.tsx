import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { LIGHTNING } from 'src/constants';
import type { Cell } from 'src/utils';

interface GameFieldProps {
  cell: Cell;
  onCellPress: (cellId: string) => void;
}

const GameField = ({ cell, onCellPress }: GameFieldProps) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onCellPress(cell.id)}
      activeOpacity={0.7}
    >
      {cell.hasLightning && (
        <Image
          source={LIGHTNING}
          resizeMode="contain"
          style={styles.lightningIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default GameField;
