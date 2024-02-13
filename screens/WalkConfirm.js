import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Feather,
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

const WalkConfirm = () => {
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
            <Text className="text-[#E5E7ED] font-medium text-lg">
              Where Do You Wanna Go?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image className="w-full h-40  mb-1 rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
          <View className="flex ">
            <View className="rounded-lg bg-[#fff] p-4 flex space-y-3">
              {/* Card Section */}

              <View className="flex flex-row items-center ml-2">
                <View className="flex space-y-1 ">
                  <Text className="font-bold mb-2">Choose Your Buddy</Text>
                  {/* Choose Options */}
                  <View className=" flex space-y-3 w-full justify-center items-center">
                    <TouchableOpacity className="w-full h-16  flex-row justify-start px-2 items-center border-[#4F9171]  border-2  rounded-lg">
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
                    <TouchableOpacity className="w-full h-16  flex-row justify-start  items-center px-2  border-[#4F9171]  border-2 rounded-lg">
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
                    <TouchableOpacity className="w-full h-16  flex-row justify-start  items-center px-2 border-[#4F9171]  border-2  rounded-lg">
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
                            Med Reputaion
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View className="flex flex-row justify-end items-center space-x-3">
                      <Text className="font-bold text-2xl text-red-500 my-2">
                        Total
                      </Text>
                      <Text className="font-bold text-lg">2 Buddy Token</Text>
                    </View>

                    <Text className="font-bold text-red-500 text-right">
                      15 mins Away to Your Destination
                    </Text>
                  </View>
                </View>
              </View>
              {/* Start Golden Hour Button */}
              <TouchableOpacity
                onPress={() => navigation.navigate("WalkStatus")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0.5 }}
                  colors={["#4F9171", "#4F9171"]}
                  style={{
                    width: "98%",
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                  }}
                >
                  <Text className="text-white font-bold text-2xl">
                    Confirm Buddy Guard
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalkConfirm;
