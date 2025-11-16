import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { LIGHTNING, RED_X } from 'src/constants';
import type { Cell } from 'src/utils';

interface GameFieldProps {
  cell: Cell;
  onCellPress: (cellId: string) => void;
  isMainGame?: boolean;
}

const GameField = ({
  cell,
  onCellPress,
  isMainGame = false,
}: GameFieldProps) => {
  return (
    <TouchableOpacity
      style={[styles.item, cell.isHit && styles.hitMarker]}
      onPress={() => onCellPress(cell.id)}
      activeOpacity={0.7}
      disabled={cell.isHit || cell.isMiss}
    >
      {!isMainGame && cell.hasLightning && (
        <Image
          source={LIGHTNING}
          resizeMode="contain"
          style={styles.lightningIcon}
        />
      )}

      {isMainGame && cell.isHit && cell.hasLightning && (
        <Image
          source={LIGHTNING}
          resizeMode="contain"
          style={styles.lightningIcon}
        />
      )}

      {isMainGame && cell.isMiss && (
        <Image source={RED_X} resizeMode="contain" style={styles.missMarker} />
      )}
    </TouchableOpacity>
  );
};

export default GameField;
