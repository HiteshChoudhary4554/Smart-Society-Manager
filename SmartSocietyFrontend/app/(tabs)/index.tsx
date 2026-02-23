import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.AppLogo}
        source={require("../../assets/app logo.png")}
      />

      <TouchableOpacity
        style={styles.box}
        onPress={() => router.push("/admin-login")}
      >
        <Text style={styles.text}>Admin</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => router.push("/member-login")}
      >
        <Text style={styles.text}>Member</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.box}
        onPress={() => router.push("/create-society")}
      >
        <Text style={styles.text}>Create Society</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },

  box: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    maxHeight: 100,
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  AppLogo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
});
