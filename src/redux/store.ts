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

import { onboardingReducer } from './slices/onboarding/slice';

const onboardingPersistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(
  onboardingPersistConfig,
  onboardingReducer,
);

const store = configureStore({
  reducer: {
    onboarding: persistedReducer,
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
