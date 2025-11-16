import React from 'react';
import { Modal, Pressable } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';
import GradientText from '../../GradientText/GradientText';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectIsAlertModalVisible } from 'src/redux/slices/gameplay/selectors';
import { hideAlertModal } from 'src/redux/slices/gameplay/slice';

const AlertModal = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector(selectIsAlertModalVisible);

  const handleCancel = () => {
    dispatch(hideAlertModal());
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      statusBarTranslucent
      animationType="fade"
      onRequestClose={handleCancel}
    >
      <Pressable style={styles.overlay} onPress={handleCancel}>
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
            <GradientText style={styles.title}>Hand of Zeus!</GradientText>
            <CustomText extraStyle={styles.message}>
              You cannot strike your own territory. The target must be an
              opponent's grid.
            </CustomText>
          </CustomContainer>

          <CustomContainer variant="yellow" extraStyle={styles.container}>
            <CustomButton handlePress={handleCancel} extraStyle={styles.button}>
              <CustomText extraStyle={styles.buttonText}>Understood</CustomText>
            </CustomButton>
          </CustomContainer>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default AlertModal;
