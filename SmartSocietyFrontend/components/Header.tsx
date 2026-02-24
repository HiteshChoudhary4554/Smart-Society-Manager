    import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export default function Header({Name = "Admin"}: {Name: string}) {
  return (
    <View className="flex-row items-center justify-between">
      {/* left  */}
      <View>
        <Text className="text-2xl font-bold text-gray-900">
          Hello, {Name}! 👋
        </Text>

        <Text className="text-sm text-gray-500 mt-1">
          Welcome to Smart Society
        </Text>
      </View>
      {/* right  */}
      <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center shadow">
        <Ionicons name="log-out-outline" size={22} color="#2563EB" />
      </TouchableOpacity>
    </View>
  );
}
