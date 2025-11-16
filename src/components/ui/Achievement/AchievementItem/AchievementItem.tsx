import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import type { Achievement } from 'src/redux/slices/achievements/slice';
import { handleShare } from 'src/utils';

interface AchievementItemProps {
  achievement: Achievement;
}

const AchievementItem = ({ achievement }: AchievementItemProps) => {
  const imageSource = achievement.isClaimed
    ? achievement.regularImage
    : achievement.blurImage;

  const handleSharePress = () => {
    handleShare();
  };

  return (
    <View style={styles.itemContainer}>
      <CustomContainer
        variant="red"
        extraStyle={styles.imageWrapper}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Image source={imageSource} style={styles.icon} resizeMode="contain" />
      </CustomContainer>

      <CustomContainer
        variant="red"
        extraStyle={styles.textContainer}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <CustomText extraStyle={styles.name}>{achievement.name}</CustomText>
        <CustomText
          extraStyle={[
            styles.description,
            !achievement.isClaimed && styles.blurredDescription,
          ]}
        >
          {achievement.description}
        </CustomText>

        {achievement.progress !== undefined &&
          achievement.target !== undefined && (
            <CustomText extraStyle={styles.progressText}>
              {`Progress: ${achievement.progress}/${achievement.target}`}
            </CustomText>
          )}

        {achievement.isClaimed && (
          <View style={styles.shareButtonContainer}>
            <CustomContainer
              variant="yellow"
              extraStyle={styles.shareButtonWrapper}
            >
              <CustomButton
                extraStyle={styles.shareButton}
                handlePress={handleSharePress}
              >
                <CustomText extraStyle={styles.shareButtonText}>
                  Share
                </CustomText>
              </CustomButton>
            </CustomContainer>
          </View>
        )}
      </CustomContainer>
    </View>
  );
};

export default AchievementItem;
