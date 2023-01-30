import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Job } from "../Screens/Home";
import { ProfileScreen } from "../Screens/Profile";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { SalaryCalculator } from "../Screens/calculator";

const bottom = createBottomTabNavigator();

const { Navigator, Screen } = bottom;

export const MainNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true
      }}
      initialRouteName="Home"
    >
       <Screen
        options={{
          tabBarIcon: () => {
            return <Feather name="home" size={24} color={"black"} />;
          },
        }}
        name="Home"
        component={Job}
      />
       <Screen
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="user" size={24} color={"black"} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      /> 
      <Screen
        options={{
          tabBarIcon: () => {
            return <FontAwesome name="calculator" size={24} color={'black'} />;
          },
        }}
        name="Calculator"
        component={SalaryCalculator}
      /> 
    </Navigator>
  );
};
