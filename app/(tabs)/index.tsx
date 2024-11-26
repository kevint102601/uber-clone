import { View, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
      <View className="flex-1 items-center justify-center bg-white">
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
      </View>
  );
}


