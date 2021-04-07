import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import * as Font from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';


function App() {
  
  useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
     }, [])
  

  return (
    <SafeAreaProvider>
      <RootNavigation/>
    </SafeAreaProvider>
  );
}

export default App