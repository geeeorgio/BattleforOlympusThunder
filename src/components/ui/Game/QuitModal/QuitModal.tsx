import React from 'react';
import { Modal, Pressable, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

interface QuitModalProps {
  isVisible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const QuitModal = ({ isVisible, onConfirm, onCancel }: QuitModalProps) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <Pressable style={styles.overlay} onPress={onCancel}>
        <Pressable
          onPress={(e) => e.stopPropagation()}
          style={styles.dialogWrapper}
        >
          <CustomContainer
            variant="red"
            extraStyle={styles.dialog}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            <CustomText extraStyle={styles.title}>Exit game?</CustomText>
            <CustomText extraStyle={styles.message}>
              Are you sure you want to quit? Your current progress will not be
              saved.
            </CustomText>
          </CustomContainer>

          <View style={styles.buttonsContainer}>
            <CustomContainer
              variant="red"
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            >
              <CustomButton handlePress={onConfirm} extraStyle={styles.button}>
                <CustomText extraStyle={styles.confirmText}>Confirm</CustomText>
              </CustomButton>
            </CustomContainer>

            <CustomContainer variant="yellow">
              <CustomButton handlePress={onCancel} extraStyle={styles.button}>
                <CustomText extraStyle={styles.cancelText}>Cancel</CustomText>
              </CustomButton>
            </CustomContainer>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default QuitModal;
