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
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Hangout1, Hangout2, Hangout3, Map } from "../assets/images";
import { LinearGradient } from "expo-linear-gradient";
import SwipeButton from "../components/SwipeButton";

const Home = () => {
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
        <View className="pt-9 px-4 flex space-y-4 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-[#121418] font-semibold text-base">
              Gm, Joy
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("AcceptRequest")}
            >
              <MaterialCommunityIcons
                name="message-badge"
                size={26}
                color="#3998FF"
              />
            </TouchableOpacity>
          </View>
          {/* Explore Your Neighborhood*/}
          <View className="flex space-y-2">
            <Text className="text-[#121418] font-medium text-lg">
              Explore Your Neighborhood
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image className="w-full h-40  mb-2 rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Upcoming Events*/}
          <View className="flex space-y-2">
            <View className="mb-6">
              <Text className="text-[#121418] font-medium text-lg">
                Upcoming Events
              </Text>
            </View>
            <View className="flex-row align-baseline">
              {/* timeline */}
              <View className="basis-[11%] w-full h-14 flex justify-center items-center space-y-20 mt-12 mr-2 ">
                {hangoutImages.map((image, index) => (
                  <View
                    key={index}
                    className="rounded-full w-5 h-5 bg-[#FF5757] flex justify-center items-center"
                  >
                    <View
                      key={index}
                      className="rounded-full w-2 h-2 bg-white"
                    ></View>
                  </View>
                ))}
              </View>
              {/* event list */}
              <View className="flex w-full space-y-[47px]">
                {hangoutImages.map((image, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.navigate("Hangout")}
                    className="w-[85%] h-14  flex justify-center items-center"
                  >
                    <Image className="w-full h-24 rounded-lg" source={image} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
          {/* Swipe Button */}
          <View className="flex">
            <View className="mt-6 mb-3">
              <Text className="text-[#121418] font-medium text-lg ">
                Swipe Hangout
              </Text>
            </View>
            {/* swipe button */}

            <SwipeButton />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
