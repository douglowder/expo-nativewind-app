import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-blue-500 mb-4">Home</Text>
      <Text className="text-base text-gray-600">Welcome to your Expo app!</Text>
    </View>
  );
}
