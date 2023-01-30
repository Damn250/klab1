import {
  View,
  Text,
  TextInput,
  Pressable,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const SalaryCalculator = () => {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").height;

  const [salary, setSalary] = useState();
  const [result, setResult] = useState();
  const [range] = useState({
    minimum: 30000,
    minimumPercentage: 20,
    maximum: 100000,
    maximumPercentage: 30,
  });
  const { minimum, minimumPercentage, maximum, maximumPercentage } = range;

  const Calculator = () => {
    setSalary(0);
    setResult(0);
    if (salary == 0) {
      return alert("Please input your salary");
    }
    if (salary <= minimum) {
      return alert("You are not paying any PAYE tax");
    }
    if (salary > minimum && salary <= maximum) {
      return setResult(salary - (salary * minimumPercentage) / 100);
    }
    return setResult(salary - (salary * maximumPercentage) / 100);
  };

  return (
    <SafeAreaView>
      <ImageBackground 
       >
        <View
          style={{
            marginTop:90,
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            paddingHorizontal: 25,
            height: "80%",
            backgroundColor: "#b1c8f8",
          
            
            margin: 20,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              alignItems: "center",
              fontWeight: "bold",
              margin: 30,
              marginLeft: 10,
              fontSize: 30,
            }}
          >
            Pay As You Earn
          </Text>
          <Text style={{ fontSize: 20 }}>
            Calculate your PAYE tax for your salary
          </Text>

          <TextInput
            style={{
              borderRadius: 20,
              borderWidth: 3,
              marginBottom: 40,
              height: 60,
            }}
            placeholder="Enter Your Money"
            keyboardType="numeric"
            value={salary}
            onChangeText={(number) => setSalary(number)}
          />

          <Pressable
            style={{
              backgroundColor: "blue",
              padding: 20,
              borderRadius: 20,

              paddindRight: 30,
            }}
            onPress={Calculator}
          >
            <Text
              style={{
                paddingLeft: 20,
                paddingRight: 20,
                color: "white",
              }}
            >
              Calculate
            </Text>
          </Pressable>
          <Text style={{ fontSize: 20 }}>
            Your Net Salary is{" "}
            <Text
              style={{
                color: "green",
                fontWeight: "600",
                borderRadius: 20,
                borderWidth: 30,
              }}
            >
              {" "}
              {result}{" "}
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
