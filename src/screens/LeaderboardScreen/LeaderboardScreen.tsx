import React from 'react';
import { FlatList } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  LeaderboardHeader,
  LeaderboardRow,
} from 'src/components';
import CustomButton from 'src/components/ui/CustomButton/CustomButton';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectSortedLeaderboard } from 'src/redux/slices/leaderboard/selectors';
import { handleShare, mockBoard } from 'src/utils';

const LeaderboardScreen = () => {
  const sortedBoard = useAppSelector(selectSortedLeaderboard);

  const displayData = mockBoard(sortedBoard);

  const handleSharePress = () => {
    handleShare();
  };

  return (
    <CustomScreenWrapper extraStyle={styles.screenWrapper}>
      <CustomContainer
        variant="red"
        extraStyle={styles.tableContainer}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <FlatList
          data={displayData}
          renderItem={({ item, index }) => (
            <LeaderboardRow player={item} place={index + 1} />
          )}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<LeaderboardHeader />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </CustomContainer>

      <CustomContainer variant="yellow" extraStyle={styles.shareContainer}>
        <CustomButton
          extraStyle={styles.shareButton}
          handlePress={handleSharePress}
        >
          <CustomText extraStyle={styles.shareButtonText}>Share</CustomText>
        </CustomButton>
      </CustomContainer>
    </CustomScreenWrapper>
  );
};

export default LeaderboardScreen;
