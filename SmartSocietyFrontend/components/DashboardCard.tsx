import { Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity} from "react-native";
import DashboardHeader from "./Dashboard_Header";

export default function DashboardCards() {
  return (
    <View>
      {/* Dashboard Header */}
      <View>
        <DashboardHeader />
      </View>
      {/* Row 1 */}
      <View className="flex-row justify-between mb-4">
        {/* Members */}
        <TouchableOpacity className="w-[48%] bg-green-100 rounded-2xl p-4">
          <Ionicons name="people" size={28} color="#16A34A" />
          <Text className="text-2xl font-bold text-green-700 mt-2">250</Text>
          <Text className="text-gray-600">Members</Text>
        </TouchableOpacity>

        {/* Payments */}
        <TouchableOpacity className="w-[48%] bg-blue-100 rounded-2xl p-4">
          <Ionicons name="wallet" size={28} color="#2563EB" />
          <Text className="text-2xl font-bold text-blue-700 mt-2">₹48,500</Text>
          <Text className="text-gray-600">Pending Dues</Text>
        </TouchableOpacity>
      </View>

      {/* Row 2 */}
      <View className="flex-row justify-between">
        {/* Notices */}
        <TouchableOpacity className="w-[48%] bg-orange-100 rounded-2xl p-4">
          <Ionicons name="megaphone" size={28} color="#EA580C" />
          <Text className="text-2xl font-bold text-orange-700 mt-2">8</Text>
          <Text className="text-gray-600">Notices</Text>
        </TouchableOpacity>

        {/* Complaints */}
        <TouchableOpacity className="w-[48%] bg-red-100 rounded-2xl p-4">
          <Ionicons name="chatbubble-ellipses" size={28} color="#DC2626" />
          <Text className="text-2xl font-bold text-red-700 mt-2">5</Text>
          <Text className="text-gray-600">Complaints</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
