import React, { useState } from 'react';
import { Image, TextInput, View } from 'react-native';

import CustomContainer from '../../CustomContainer/CustomContainer';

import { styles } from './styles';

import { COLORS, ZEUS_IMGS } from 'src/constants';

interface GameSettingsProps {
  player1Name: string;
  player2Name: string;
  setPlayer1Name: (name: string) => void;
  setPlayer2Name: (name: string) => void;
}

const GameSettings = ({
  player1Name,
  player2Name,
  setPlayer1Name,
  setPlayer2Name,
}: GameSettingsProps) => {
  const [internalPlayer1Name, setInternalPlayer1Name] =
    useState<string>(player1Name);
  const [internalPlayer2Name, setInternalPlayer2Name] =
    useState<string>(player2Name);

  const handlePlayer1EndEditing = () => {
    setPlayer1Name(internalPlayer1Name);
  };

  const handlePlayer2EndEditing = () => {
    setPlayer2Name(internalPlayer2Name);
  };

  const handlePlayer1Change = (text: string) => {
    setInternalPlayer1Name(text.trim());
  };

  const handlePlayer2Change = (text: string) => {
    setInternalPlayer2Name(text.trim());
  };

  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <CustomContainer
          variant="red"
          extraStyle={styles.imageContainer}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Image
            source={ZEUS_IMGS.wayToOlimpZeus1}
            resizeMode="contain"
            style={styles.image}
          />
        </CustomContainer>

        <CustomContainer
          variant="red"
          extraStyle={styles.inputContainer}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <TextInput
            placeholder="Player 1"
            placeholderTextColor={COLORS.black}
            style={styles.input}
            value={internalPlayer1Name}
            onChangeText={handlePlayer1Change}
            onEndEditing={handlePlayer1EndEditing}
          />
        </CustomContainer>
      </View>

      <View style={styles.playerContainer}>
        <CustomContainer
          variant="red"
          extraStyle={styles.imageContainer}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Image
            source={ZEUS_IMGS.wayToOlimpZeus2}
            resizeMode="contain"
            style={styles.image}
          />
        </CustomContainer>

        <CustomContainer
          variant="red"
          extraStyle={styles.inputContainer}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <TextInput
            placeholder="Player 2"
            placeholderTextColor={COLORS.black}
            style={styles.input}
            value={internalPlayer2Name}
            onChangeText={handlePlayer2Change}
            onEndEditing={handlePlayer2EndEditing}
          />
        </CustomContainer>
      </View>
    </View>
  );
};

export default GameSettings;
