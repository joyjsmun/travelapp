import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useCallback, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Avatar1,
  Avatar2,
  Hangout1,
  Hangout2,
  Hangout3,
  LogoImage,
  Map,
} from "../assets/images";
import { LinearGradient } from "expo-linear-gradient";
import SwipeButton from "../components/SwipeButton";

const SupportConfirm = () => {
  const navigation = useNavigation();
  const hangoutImages = [Hangout1, Hangout3]; // Assuming you have an array of hangout images

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#F6D268] flex-1 relative">
      <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 60 }}>
        <View className="pt-4 px-4 flex space-y-4 ">
          {/* Top Section */}
          <View className="flex space-y-2">
            {/* <Text className="text-[#E5E7ED] font-medium text-lg">
              Where Do You Wanna Go?
            </Text> */}
            <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image className="w-full h-40  rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
          <View className="flex space-y-2">
            <View className="rounded-lg bg-[#fff] p-4 flex space-y-2">
              {/* Card Section */}

              <View className="flex flex-row items-center ml-2">
                <View className="flex space-y-2 ">
                  <Text className="font-bold mb-2 text-lg ">
                    I lost my passport. Can anyone go to the police station with
                    me? I need Language Support
                  </Text>

                  <Text className="font-bold mb-1">Choose Your Buddy</Text>
                  {/* Choose Options */}
                  <View className=" flex space-y-2">
                    <TouchableOpacity className="w-76 h-16  flex-row justify-start px-2 items-center border-[#1B75BC] border-2  rounded-lg">
                      <Image
                        className="w-10 h-12 rounded-full relative"
                        source={LogoImage}
                      />
                      <View className="flex space-y-1">
                        <Text className="text-md font-semibold ml-4">
                          {" "}
                          Buddy-Guard(Local)
                        </Text>
                        <View className="flex flex-row justify-between">
                          <Text className="text-sm ml-4"> Near 200m</Text>
                          <Text className="text-sm ml-4 font-medium text-[#FF5757]">
                            High Reputaion
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-76 h-16  flex-row justify-start  items-center px-2  border-[#1B75BC] border-2 rounded-lg">
                      <Image
                        className="w-11 h-11 rounded-full relative"
                        source={Avatar1}
                      />
                      <View className="flex space-y-1">
                        <Text className="text-md font-semibold ml-4">
                          {" "}
                          Juliet K
                        </Text>
                        <View className="flex flex-row justify-between">
                          <Text className="text-sm ml-4"> Near 200m</Text>
                          <Text className="text-sm ml-4 font-medium text-[#FF5757]">
                            High Reputaion
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-76 h-16  flex-row justify-start  items-center px-2 border-[#1B75BC] border-2  rounded-lg">
                      <Image
                        className="w-11 h-11 rounded-full relative"
                        source={Avatar2}
                      />
                      <View className="flex space-y-1">
                        <Text className="text-md font-semibold ml-4">
                          {" "}
                          James Lee
                        </Text>
                        <View className="flex flex-row justify-between">
                          <Text className="text-sm ml-4"> Near 200m</Text>
                          <Text className="text-sm ml-4 font-medium text-[#FF5757]">
                            Medium Reputaion
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View className="flex flex-row justify-end items-center space-x-2">
                      <Text className="font-bold text-2xl text-red-500 ">
                        Total
                      </Text>
                      <Text className="font-bold text-lg">2 Buddy Token</Text>
                    </View>
                    {/* <Text className="text-right">
                      (For 15mins Buddy-Guard fee)
                    </Text> */}
                  </View>
                </View>
              </View>
              {/* Support confirm button */}
              <View className="flex flex-row w-full justify-between px-2">
                <View>
                  <FontAwesome name="commenting" size={50} color={"#CAC6D1"} />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SupportStatus")}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={["#1B75BC", "#1B75BC"]}
                    style={{
                      width: "100%",
                      height: 60,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 25,
                      paddingHorizontal: 35,
                    }}
                  >
                    <Text className="text-[#E5E7ED] font-bold text-lg ">
                      Support Request
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupportConfirm;
