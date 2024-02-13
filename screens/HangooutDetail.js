import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Avatar1, Hangout5, Map } from "../assets/images";
import { LinearGradient } from "expo-linear-gradient";

const HangoutDetail = () => {
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
          {/* Hangout detail */}
          <View className="flex space-y-4">
            <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image
                className="w-full h-52  mb-2 rounded-lg relative"
                source={Hangout5}
              />
              <View className="absolute bottom-0 w-full">
                <View className="flex flex-row items-cente ">
                  {/* title and date */}
                  <View className="absolute left-3 bottom-3">
                    <Text className="text-white font-bold text-4xl">
                      Tennis Night
                    </Text>
                  </View>
                  <View className="absolute right-3 bottom-5  ">
                    <Text className="text-white text-xs font-bold">
                      2024/02/21
                    </Text>
                    <Text className="text-white text-xs font-bold">
                      5/10 People
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* description box */}
          <View className="rounded-lg bg-[#F2F2F2] p-4 flex space-y-6">
            {/* tags */}
            <View className="flex flex-row justify-around items-center">
              <View className="flex flex-row bg-[#F8C145] py-1 px-2 justify-center items-center rounded-2xl">
                <MaterialIcons name="sports-tennis" size={24} color={"#fff"} />
                <Text className="text-white ml-1">Sports</Text>
              </View>
              <View className="flex flex-row bg-[#337B58] py-1 px-2 justify-center items-center rounded-2xl">
                <FontAwesome name="group" size={24} color={"#fff"} />
                <Text className="text-white ml-1">Group</Text>
              </View>
              <View className="flex flex-row bg-[#FF5757] py-1 px-2 justify-center items-center rounded-2xl">
                <MaterialIcons name="sports-tennis" size={24} color={"#fff"} />
                <Text className="text-white ml-1">Outdoor</Text>
              </View>
            </View>
            <View className="flex space-y-2">
              <Text className="font-bold">Description</Text>
              <Text>
                Hi! I'm Coach Criss. I have a small group of beginners looking
                to have some fun on Friday nights.
              </Text>
            </View>
            {/* Location */}
            <View className="flex space-y-2">
              <Text className="font-bold">Location</Text>
              <Text>Hawaii, Waikiki Island</Text>
            </View>
            {/* Orgnizer */}
            <View className="flex flex-row justify-between">
              <View className="flex space-y-2">
                <Text className="font-bold">Organizer</Text>
                <View className="flex flex-row items-end">
                  <Image
                    className="w-12 h-12 rounded-full border-gray-200 border-2 relative"
                    source={Avatar1}
                  />
                  <View
                    className="absolute left-11 bottom-1
                   "
                  >
                    <MaterialIcons
                      name="verified"
                      size={24}
                      color={"#3998FF"}
                    />
                    <Text className="font-medium text-sm">Verified</Text>
                  </View>
                </View>
              </View>
              <View className="flex space-y-2">
                <Text className="font-bold">Event Ends</Text>
                <Text>2hr 14mins</Text>
              </View>
            </View>
            {/* Bottom Menu */}
            <View className="flex flex-row justify-between items-center">
              <View>
                <FontAwesome name="commenting" size={50} color={"#CAC6D1"} />
              </View>
              <LinearGradient
                colors={["#1B75BC", "#1B75BC"]}
                style={{
                  width: "75%",
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <Text className="text-white font-bold text-2xl">
                  Join Event
                </Text>
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HangoutDetail;
