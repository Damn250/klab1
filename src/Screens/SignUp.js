import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUPScreen({ navigation }) {
  return (
    <SafeAreaView >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          paddingHorizontal: 25,
          margin: 15,
          borderRadius: 10,
          paddingBottom: 10,
          
          backgroundColor: "#b1c8f8",
        }}
      >
        <Image
          style={{ width: 100, height: 100, alignSelf: "center" }}
          source={require("./Agafoto.png")}
        />
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              alignItems: "center",
              fontWeight: "bold",

              marginLeft: 80,
              fontSize: 30,
            }}
          >
            Create Account
          </Text>
        </View>
        <View>
          <TextInput
            style={{
              borderRadius: 20,
              borderWidth: 3,
              marginBottom: 40,
              height: 60,
            }}
            placeholder="Enter Email"
            module=""
          />
          <TextInput
            style={{
              borderRadius: 20,
              borderWidth: 3,
              marginBottom: 40,
              height: 60,
            }}
            placeholder="Enter password"
          />
          <TextInput
            style={{
              borderRadius: 20,
              borderWidth: 3,
              marginBottom: 40,
              height: 60,
            }}
            placeholder="Enter Password"
            module=""
          />
          <TextInput
            style={{
              borderRadius: 20,
              borderWidth: 3,
              marginBottom: 40,
              height: 60,
            }}
            placeholder="Enter password"
          />
        </View>

        <Pressable
          style={{
            backgroundColor: "blue",
            padding: 24,
            borderRadius: 20,

            paddindRight: 30,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text
            style={{
              paddingLeft: 90,
              paddingRight: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            SIGN UP
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
