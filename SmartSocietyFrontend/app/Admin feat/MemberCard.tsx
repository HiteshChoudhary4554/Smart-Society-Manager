import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MemberCard({
  member = { avatar: "", name: "", flat: "", phone: "" },
  onPress = () => {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center">
        {/* Avatar */}
        <Image
          source={{ uri: member?.avatar }}
          className="w-14 h-14 rounded-full mr-3"
        />

        {/* Info */}
        <View className="flex-1">
          <Text className="text-base font-semibold text-gray-900">
            {member?.name}
          </Text>

          <Text className="text-gray-500 text-sm">Flat {member?.flat}</Text>

          <Text className="text-gray-400 text-xs">{member?.phone}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
