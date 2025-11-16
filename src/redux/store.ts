import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  REGISTER,
  PURGE,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
} from 'redux-persist';

import { achievementsReducer } from './slices/achievements/slice';
import { gameplayReducer } from './slices/gameplay/slice';
import { leaderboardReducer } from './slices/leaderboard/slice';
import { onboardingReducer } from './slices/onboarding/slice';

const onboardingPersistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  onboardingPersistConfig,
  onboardingReducer,
);

const leaderboardPersistConfig = {
  key: 'leaderboard',
  storage: AsyncStorage,
};

const persistedLeaderboardReducer = persistReducer(
  leaderboardPersistConfig,
  leaderboardReducer,
);

const achievementsPersistConfig = {
  key: 'achievements',
  storage: AsyncStorage,
};

const persistedAchievementsReducer = persistReducer(
  achievementsPersistConfig,
  achievementsReducer,
);

const store = configureStore({
  reducer: {
    onboarding: persistedReducer,
    gameplay: gameplayReducer,
    leaderboard: persistedLeaderboardReducer,
    achievements: persistedAchievementsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
