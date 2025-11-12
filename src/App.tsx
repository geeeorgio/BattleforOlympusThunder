import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View></View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
