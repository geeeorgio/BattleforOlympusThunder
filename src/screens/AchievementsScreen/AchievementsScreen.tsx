import React from 'react';
import { FlatList } from 'react-native';

import { styles } from './styles';

import { AchievementItem, CustomScreenWrapper } from 'src/components';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectAvailableAchievements } from 'src/redux/slices/achievements/selectors';

const AchievementsScreen = () => {
  const achievements = useAppSelector(selectAvailableAchievements);

  return (
    <CustomScreenWrapper extraStyle={styles.screenWrapper}>
      <FlatList
        data={achievements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AchievementItem achievement={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </CustomScreenWrapper>
  );
};

export default AchievementsScreen;
