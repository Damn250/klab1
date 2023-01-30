import react from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome } from "@expo/vector-icons";


export const Job = () => {
  return (
      <ScrollView>
    <SafeAreaView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "column", paddingLeft: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Hi I'm Dimitri 👋
          </Text>
          <Text>create your better future here</Text>
        </View>
        <View>
          <Ionicons
            style={{
              padding: 8,
              borderWidth: 1,
              borderRadius: 45,
              marginRight: 30,
              height: 40,
              width: 40,
            }}
            name="notifications-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: 30,
          borderRadius: 20,
          borderWidth: 1,
          padding: 7,
          marginRight: 30,
        }}
      >
        <View>
          <Ionicons size={24} name="search-outline" />
        </View>
        <View>
          <TextInput style={{ marginLeft: 5 }} placeholder="Search..." />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#f4667",
          margin: 20,
          marginTop: 20,
          backgroundColor: "#d6e4ff",
          padding: 20,
          borderRadius: 20,
        }}
      >
        <View>
          <FontAwesome
            style={{ backgroundColor: "#5c91ff", borderRadius: 10 }}
            name="twitter"
            size={45}
            color="white"
          ></FontAwesome>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>twitter</Text>
          <Text>waiting to be selected by the </Text>
          <Text>twitter team</Text>
        </View>
        <View style={{ borderRadius: 15, marginTop: 7 }}>
          <Pressable
            style={{
              backgroundColor: "#afcaff",
              padding: 10,
              borderRadius: 20,
            }}
            >
            <Text
              style={{ color: "darkblue", fontWeight: 'bold', marginLeft: 0 }}
            >
              Submited
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 20,
          marginLeft: 20,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Suggested Job</Text>
        <Pressable>
          <Text style={{ fontWeight: 'bold', color: "#6884d7" }}>View all</Text>
        </Pressable>
      </View>
      <ScrollView style={{ flexDirection: "row" , width:350}} horizontal>
        <View style={{ flexDirection: "row", paddingLeft: 0 ,}}>
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#0a1a7a",
              margin: 10,
              borderRadius: 20,
              padding: 9,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                borderRadius: 20,
              }}
            >
              <View>
                <FontAwesome
                  style={{
                    backgroundColor: "#3e7eff",
                    padding: 5,
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  name="camera"
                  size={30}
                  color="white"
                  />
              </View>
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontSize: 25, color: "white" }}>
                  {" "}
                  Product Designer{" "}
                </Text>
                <Text style={{ color: "white" }}>Zoom . United States</Text>
              </View>
              <Ionicons
                style={{ paddingTop: 10, marginLeft: 15, color: "white" }}
                name="notifications-outline"
                size={35}
                />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                justifyContent: "space-around",
                marginTop: 10,
              }}
              >
              <View>
                <Pressable
                  style={{
                    backgroundColor: "#2b3991",
                    padding: 10,
                    borderRadius: 20,
                    paddindRight: 30,
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Fulltime
                  </Text>
                </Pressable>
              </View>

              <View>
                <Pressable
                  style={{
                    backgroundColor: "#2b3991",
                    padding: 10,
                    borderRadius: 20,
                    paddindRight: 30,
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Remote
                  </Text>
                </Pressable>
              </View>
              <View>
                <Pressable
                  style={{
                    backgroundColor: "#2b3991",
                    padding: 10,
                    borderRadius: 20,

                    paddindRight: 30,
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Design
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 30, paddingLeft: 20, color: "white" }}>
                  12k-15k
                </Text>
                <Text style={{ marginTop: 20, color: "#777778" }}>/month</Text>
              </View>
              <View>
                <Pressable
                  style={{
                    backgroundColor: "#2865fc",
                    padding: 10,
                    borderRadius: 20,

                    paddindRight: 30,
                    margin: 10,
                    marginLeft: 60,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      paddingLeft: 20,
                      paddingRight: 20,
                    }}
                  >
                    Apply now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingLeft: 0 }}>
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#0a1a7a",
              margin: 10,
              borderRadius: 20,
              padding: 9,
            }}
            >
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                borderRadius: 20,
              }}
              >
              <View>
                <FontAwesome
                  style={{
                    backgroundColor: "#3e7eff",
                    padding: 5,
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  name="camera"
                  size={30}
                  color="white"
                />
              </View>
              <View style={{ flexDirection: "column", marginLeft: 10 }}>
                <Text style={{ fontSize: 25, color: "white" }}>
                  {" "}
                  Product Designer{" "}
                </Text>
                <Text style={{ color: "white" }}>Zoom . United States</Text>
              </View>
              <Ionicons
                style={{ paddingTop: 10, marginLeft: 15, color: "white" }}
                name="notifications-outline"
                size={35}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                justifyContent: "space-around",
                marginTop: 10,
              }}
            >
              <View>
                <Pressable
                  style={{
                    backgroundColor: "#2b3991",
                    padding: 10,
                    borderRadius: 20,
                    paddindRight: 30,
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Fulltime
                  </Text>
                </Pressable>
              </View>

              <View>
                <Pressable
                  style={{
                    backgroundColor: "#2b3991",
                    padding: 10,
                    borderRadius: 20,
                    
                    paddindRight: 30,
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Remote
                  </Text>
                </Pressable>
              </View>
              <View>
                <Pressable
                  style={{
                    backgroundColor: "#2b3991",
                    padding: 10,
                    borderRadius: 20,

                    paddindRight: 30,
                  }}
                >
                  <Text
                    style={{
                      paddingLeft: 20,
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    Design
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 30, paddingLeft: 20, color: "white" }}>
                  12k-15k
                </Text>
                <Text style={{ marginTop: 20, color: "#777778" }}>/month</Text>
              </View>
              <View>
                <Pressable
                  style={{
                    backgroundColor: "#2865fc",
                    padding: 10,
                    borderRadius: 20,
                    
                    paddindRight: 30,
                    margin: 10,
                    marginLeft: 60,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      paddingLeft: 20,
                      paddingRight: 20,
                    }}
                  >
                    Apply now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 20,
          marginLeft: 20,
        }}
        >
        <Text style={{ fontWeight: "900", fontSize: 18 }}>Recent Job</Text>
        <Pressable>
          <Text style={{ fontWeight: "bold", color: "#6884d7" }}>View all</Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",

          margin: 20,
          marginTop: 20,

          padding: 20,
          borderRadius: 20,
        }}
      >
        <View>
          <FontAwesome
            style={{ backgroundColor: "#5c91ff", borderRadius: 10 }}
            name="twitter"
            size={45}
            color="white"
          ></FontAwesome>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Senior UI Designer
          </Text>
          <Text>Twitter. jakarta, Indonesia </Text>
        </View>
        <View>
          <Ionicons
            style={{ paddingTop: 10, marginLeft: 15, color: "blue" }}
            name="notifications"
            size={35}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          justifyContent: "space-around",
          
        }}
      >
        <View>
          <Pressable
            style={{
              backgroundColor: "#dae4fd",
              padding: 10,
              borderRadius: 20,
              paddindRight: 30,
              margin:10
            }}
          >
            <Text style={{ paddingLeft: 20, paddingRight: 20, color: "blue" }}>
              Fulltime
            </Text>
          </Pressable>
        </View>

        <View>
          <Pressable
            style={{
              backgroundColor: "#dae4fd",
              padding: 10,
              borderRadius: 20,

              paddindRight: 30,
              margin:10
            }}
          >
            <Text style={{ paddingLeft: 20, paddingRight: 20, color: "blue" }}>
              Remote
            </Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            style={{
              backgroundColor: "#dae4fd",
              padding: 10,
              borderRadius: 20,
              margin:10,
              paddindRight: 30,
            }}
          >
            <Text style={{ paddingLeft: 20 , paddingRight: 20, color: "blue" }}>
              Design
            </Text>
          </Pressable>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: "green",
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          $15K
        </Text>
        <Text style={{ marginTop: 18, fontSize: 8 }}>/month</Text>
      </View>
    </SafeAreaView>
          </ScrollView>
  );
};
