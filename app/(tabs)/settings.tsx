import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-green-500 mb-4">Settings</Text>
      <Text className="text-base text-gray-600">Configure your preferences here.</Text>
    </View>
  );
}
