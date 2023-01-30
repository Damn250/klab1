import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginVertical: 20 }}>
        <Image
          style={{
            height: 200,
            width: 200,
            alignSelf: "center",
            borderRadius: 100,
          }}
          source={require("./Dim.jpg")}
        />
        <Text style={{ alignSelf: "center", fontSize: 30 }}>
          Kwihangana Dimitri
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginHorizontal: 30,
        }}
      >
        <Text style={{ fontSize: 18, color: "blue" }}> UI Designer </Text>
        <Text style={{ fontSize: 18, color: "blue" }}> Web Developer </Text>
        <Text style={{ fontSize: 18, color: "blue" }}> Mobile Developer </Text>
      </View>
      <Text
        style={{
          paddingHorizontal: 30,
          alignSelf: "center",
          fontSize: 30,
          marginTop: 40,
          borderRadius: 50,
          borderWidth: 1,
        }}
      >
        Kigali, Rwanda
      </Text>
      <Text style={{ alignSelf: "center", marginVertical: 10, fontSize: 30 }}>
        {" "}
        Male, 25
      </Text>
      <Pressable
        style={{
          backgroundColor: "blue",
          padding: 20,
          borderRadius: 20,
          paddindRight: 20,
          marginHorizontal: 40,
          marginTop: 50,
        }}
        onPress={() => navigation.navigate("MainNavigation")}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          LOGOUT
        </Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "red",
          padding: 20,
          borderRadius: 20,
          paddindRight: 20,
          marginHorizontal: 40,
          marginTop: 10,
        }}
        onPress={() => navigation.navigate("MainNavigation")}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          DELETE Account
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};
