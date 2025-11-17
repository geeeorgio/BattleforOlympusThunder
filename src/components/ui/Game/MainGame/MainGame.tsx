import React from 'react';
import { Image, View } from 'react-native';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';
import FieldSetup from '../FieldSetup/FieldSetup';

import { styles } from './styles';

import { ARROW_DOWN, ARROW_UP } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectIsFirstStrikeMade } from 'src/redux/slices/achievements/selectors';
import { setFirstStrike } from 'src/redux/slices/achievements/slice';
import {
  selectCurrentPlayer,
  selectPlayer1,
  selectPlayer1Grid,
  selectPlayer2,
  selectPlayer2Grid,
} from 'src/redux/slices/gameplay/selectors';
import { attackCell, showAlertModal } from 'src/redux/slices/gameplay/slice';

interface MainGameProps {
  isMainGame?: boolean;
}

const MainGame = ({ isMainGame = false }: MainGameProps) => {
  const dispatch = useAppDispatch();
  const player1 = useAppSelector(selectPlayer1);
  const player2 = useAppSelector(selectPlayer2);
  const currentPlayer = useAppSelector(selectCurrentPlayer);
  const player1Grid = useAppSelector(selectPlayer1Grid);
  const player2Grid = useAppSelector(selectPlayer2Grid);
  const isFirstStrikeMade = useAppSelector(selectIsFirstStrikeMade);

  const handleAttack = (
    cellId: string,
    attackingPlayerId: 'player_1' | 'player_2',
  ) => {
    const targetGrid =
      attackingPlayerId === 'player_1' ? player2Grid : player1Grid;
    const cell = targetGrid.find((c) => c.id === cellId);

    if (
      cell &&
      !cell.isHit &&
      !cell.isMiss &&
      cell.hasLightning &&
      !isFirstStrikeMade
    ) {
      dispatch(setFirstStrike(attackingPlayerId));
    }

    dispatch(attackCell(cellId));
  };

  const handleGrid1Press = (cellId: string) => {
    if (currentPlayer.id === 'player_1') {
      dispatch(showAlertModal());
      return;
    }

    handleAttack(cellId, 'player_2');
  };

  const handleGrid2Press = (cellId: string) => {
    if (currentPlayer.id === 'player_2') {
      dispatch(showAlertModal());
      return;
    }

    handleAttack(cellId, 'player_1');
  };

  return (
    <View style={styles.container}>
      <View style={styles.playerGridContainer}>
        <CustomContainer
          variant="red"
          extraStyle={styles.playerInfoContainer}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <CustomText extraStyle={styles.playerNameText}>
            {player1.name}
          </CustomText>
          <Image
            source={player1.image}
            style={styles.playerGridImage}
            resizeMode="contain"
          />
        </CustomContainer>

        <View style={styles.field}>
          <FieldSetup
            currentPlayerGrid={player1Grid}
            onCellPress={handleGrid1Press}
            isMainGame={isMainGame}
          />
        </View>
      </View>

      <View style={styles.divider}>
        <Image
          source={currentPlayer.id === 'player_1' ? ARROW_DOWN : ARROW_UP}
          resizeMode="contain"
          style={styles.dividerIcon}
        />
      </View>

      <View style={styles.playerGridContainer}>
        <CustomContainer
          variant="red"
          extraStyle={styles.playerInfoContainer}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <CustomText extraStyle={styles.playerNameText}>
            {player2.name}
          </CustomText>
          <Image
            source={player2.image}
            style={styles.playerGridImage}
            resizeMode="contain"
          />
        </CustomContainer>

        <View style={styles.field}>
          <FieldSetup
            currentPlayerGrid={player2Grid}
            onCellPress={handleGrid2Press}
            isMainGame={isMainGame}
          />
        </View>
      </View>
    </View>
  );
};

export default MainGame;
