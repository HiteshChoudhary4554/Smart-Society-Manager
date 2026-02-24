import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardHeader() {
  return (
    <View className="flex-row items-center justify-between px-5 py-4">

      {/* Left Side */}
      <View className="flex-row items-center gap-2">

        {/* Icon */}
        <View className="w-8 h-8 bg-green-500 rounded-full items-center justify-center">
          <Ionicons name="grid" size={16} color="white" />
        </View>

        {/* Title */}
        <Text className="text-lg font-semibold text-gray-800">
          Dashboard
        </Text>

        {/* Notification Badge */}
        <View className="bg-red-500 px-2 rounded-full">
          <Text className="text-white text-xs font-bold">
            4
          </Text>
        </View>

      </View>

      {/* Right Arrow */}
      <TouchableOpacity>
        <Ionicons
          name="chevron-down"
          size={22}
          color="#6B7280"
        />
      </TouchableOpacity>

    </View>
  );
}