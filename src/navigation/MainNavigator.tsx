import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { CustomHeader } from 'src/components';
import {
  AchievementsScreen,
  GameScreen,
  HomeScreen,
  LeaderboardScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        header: (props) => <CustomHeader {...props} />,
        contentStyle: { backgroundColor: 'transparent' },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <Main.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Main.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ title: 'Game' }}
      />
      <Main.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
        options={{ title: 'Leaderboard' }}
      />
      <Main.Screen
        name="AchievementsScreen"
        component={AchievementsScreen}
        options={{ title: 'Achievement' }}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
