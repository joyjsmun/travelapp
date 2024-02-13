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

import { Map } from "../assets/images";
import { LinearGradient } from "expo-linear-gradient";
import SwipeButton from "../components/SwipeButton";

const HangoutCreate = () => {
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
              Create Your Hangout
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image className="w-full h-40  mb-2 rounded-lg" source={Map} />
            </TouchableOpacity>
          </View>
          {/* Card Section */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HangoutCreate;
