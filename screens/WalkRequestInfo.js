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
import { Avatar1, Hangout1, Hangout2, Hangout3, Map } from "../assets/images";
import { LinearGradient } from "expo-linear-gradient";
import SwipeButton from "../components/SwipeButton";

const WalkRequestInfo = () => {
  const navigation = useNavigation();

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
            <Text className="text-[#121418] font-medium text-lg">
              Where Do You Wanna Go?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image className="w-full h-40  mb-2 rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
          <View className="flex space-y-2">
            <View className="rounded-lg bg-[#fff] p-4 flex space-y-6">
              {/* Card Section */}
              {/* Choose Buddy */}
              <View className="flex flex-row items-center ml-2">
                <View className="flex space-y-2 w-full">
                  <Text className="font-bold">Address</Text>
                  {/* Input box - location */}
                  <TextInput
                    placeholder="Type Your Address"
                    className="w-full p-5 border-2 border-[#4F9171] tex-lg rounded-lg"
                  />
                </View>
              </View>
              <View className="flex flex-row items-center ml-2">
                <View className="flex space-y-2 w-full ">
                  <Text className="font-bold mb-2">Choose Your Buddy</Text>
                  {/* Choose Options */}
                  <View className=" flex space-y-3">
                    <TouchableOpacity className="w-full h-16  flex-row justify-start px-4 items-center  border-2 border-[#4F9171]   rounded-3xl">
                      <MaterialCommunityIcons
                        name="clock-check-outline"
                        size={30}
                        color={"#121418"}
                      />
                      <Text className="text-md font-semibold ml-4">
                        {" "}
                        Setting Golden Time
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="w-full h-16  flex-row justify-start  items-center px-4  border-2 border-[#4F9171]  rounded-3xl">
                      <MaterialIcons
                        name="online-prediction"
                        size={34}
                        color={"#121418"}
                      />
                      <Text className="text-md font-semibold ml-2 ">
                        {" "}
                        Request Live Recording
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* Next Button */}
              <TouchableOpacity
                onPress={() => navigation.navigate("WalkConfirm")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#4F9171", "#4F9171"]}
                  style={{
                    width: "98%",
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                  }}
                >
                  <Text className="text-white font-bold text-2xl">Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalkRequestInfo;
