import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("./back.jpg")}
        resizeMode="cover"
        style={{ height: windowHeight, width: windowWidth }}
      >
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 25,
            paddingVertical: 10,
            height: "80%",
            backgroundColor: "#b1c8f8",
            margin: 10,
            borderRadius: 10,

            marginTop: 90,
          }}
        >
          <Image
            style={{
              width: 100,
              height: 100,
              alignItems: "center",
              marginLeft: 100,
            }}
            source={require("./Agafoto.png")}
          />
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                alignItems: "center",
                fontWeight: "bold",
                margin: 0,
                marginLeft: 20,
                fontSize: 30,
              }}
            >
              Login
            </Text>
          </View>
          <View>
            <TextInput
              style={{
                borderRadius: 20,
                borderWidth: 3,
                marginBottom: 40,
                height: 60,
                backgroundColor: "#d4e4ff",
              }}
              placeholder="   Enter Email"
            />
            <TextInput
              style={{
                borderRadius: 20,
                borderWidth: 3,
                marginBottom: 40,
                height: 60,
                backgroundColor: "#d4e4ff",
              }}
              placeholder="   Enter password"
            />
          </View>
          <View style={{}}></View>
          <Pressable
            style={{
              backgroundColor: "blue",
              padding: 24,
              borderRadius: 20,

              paddindRight: 30,
            }}
            onPress={() => navigation.navigate("MainNavigation")}
          >
            <Text
              style={{
                paddingLeft: 90,
                paddingRight: 20,
                color: "white",
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Text>
          </Pressable>
          <Text onPress={() => navigation.navigate("SignUp")}>
            Forgot Password?
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
