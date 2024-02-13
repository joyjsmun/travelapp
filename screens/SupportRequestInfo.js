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
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Map } from "../assets/images";
import { LinearGradient } from "expo-linear-gradient";

const SupportRequestInfo = () => {
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
              Do You Need Some help?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image className="w-full h-40  mb-2 rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
          <View className="flex space-y-2">
            <View className="rounded-lg bg-[#fff] p-4 flex space-y-6">
              {/* Card Section */}
              {/* Request Info */}
              <View className="flex flex-row items-center ml-2">
                <View className="flex space-y-2">
                  <Text className="font-bold">Request Description</Text>
                  {/* Support Description */}
                  <View className="relative">
                    <TextInput
                      placeholder="Type what you need"
                      multiline
                      className="w-72 p-5 pl-14  border-[#1B75BC] border-2  tex-lg rounded-lg"
                    />
                  </View>
                  <View className="absolute left-3 top-8">
                    <FontAwesome5
                      name="hands-helping"
                      size={30}
                      color={"#121418"}
                    />
                  </View>
                </View>
              </View>
              {/* Time Info */}
              <View className="flex flex-row items-center ml-2">
                <View className="flex space-y-2 ">
                  <Text className="font-bold mb-2">
                    When Do you need this help
                  </Text>
                  <View className="relative">
                    <TextInput
                      placeholder="Type when do you need this help"
                      className="w-72 p-5 pl-12 border-[#1B75BC] border-2  tex-lg rounded-lg"
                    />
                  </View>
                  <View className="absolute left-3 top-10">
                    <MaterialCommunityIcons
                      name="clock-check-outline"
                      size={30}
                      color={"#121418"}
                    />
                  </View>
                </View>
              </View>
              {/* Location Info */}
              <View className="flex flex-row items-center ml-2">
                <View className="flex space-y-2">
                  <Text className="font-bold">Where do you need help</Text>
                  {/* Input box - location */}
                  <View className="relative">
                    <TextInput
                      placeholder="Type your location for support"
                      multiline
                      className="w-72 p-5 pl-12 border-[#1B75BC] border-2  tex-lg rounded-lg"
                    />
                  </View>
                  <View className="absolute left-3 top-8">
                    <MaterialIcons
                      name="location-pin"
                      size={33}
                      color={"#121418"}
                    />
                  </View>
                </View>
              </View>
              {/* Next Button */}
              <TouchableOpacity
                onPress={() => navigation.navigate("SupportConfirm")}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#1B75BC", "#1B75BC"]}
                  style={{
                    width: "98%",
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                  }}
                >
                  <Text className="text-[#E5E7ED] font-bold text-2xl">
                    Next
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

export default SupportRequestInfo;
