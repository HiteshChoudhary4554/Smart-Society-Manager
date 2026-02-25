import { View, Text, FlatList } from "react-native";
import MemberCard from "./MemberCard";

export default function MembersListScreen() {
  
  const members = [
    {
      id: "1",
      name: "Rahul Sharma",
      flat: "A-404",
      phone: "+91 98765 43210",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "2",
      name: "Priya Mehta",
      flat: "B-203",
      phone: "+91 91234 56789",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "3",
      name: "Amit Verma",
      flat: "C-102",
      phone: "+91 99887 66554",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <View className="flex-1 bg-gray-50 px-4 pt-12">

      {/* Header */}
      <Text className="text-2xl font-bold text-gray-900 mb-4">
        Members
      </Text>

      {/* Members List */}
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MemberCard
            member={item}
            onPress={() => {
              console.log("Clicked:", item.name);
              // Later navigation
              // navigation.navigate("MemberProfile", { member: item });
            }}
          />
        )}
      />
    </View>
  );
}