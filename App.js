import { createStackNavigator } from "@react-navigation/stack";
import { MainNavigation } from "./src/Navigation/mainNavigation";
import LoginScreen from "./src/Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { Job } from "./src/Screens/Home";
import SignUPScreen from "./src/Screens/SignUp";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUPScreen} />
          <Stack.Screen name="MainNavigation" component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
