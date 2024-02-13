import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BottomTab = ({ activeScreen }) => {
  console.log("Active Screen (BottomTab):", activeScreen);

  const navigation = useNavigation();
  return (
    <View className="absolute bottom-0 w-full ">
      <View className="bg-[#231f20] px-4 py-6  flex-row items-center justify-around">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome5
            name="home"
            size={34}
            color={activeScreen === "Home" ? "#f8c145" : "#ffffff"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
          <FontAwesome5
            name="search"
            size={34}
            color={activeScreen === "Hangout" ? "#f8c145" : "#ffffff"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("WalkRequestInfo")}
        >
          <FontAwesome5
            name="walking"
            size={40}
            color={activeScreen === "WalkRequestInfo" ? "#f8c145" : "#ffffff"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SupportRequestInfo")}
        >
          <FontAwesome5
            name="hands-helping"
            size={34}
            color={
              activeScreen === "SupportRequestInfo" ? "#f8c145" : "#ffffff"
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <FontAwesome5
            name="user-alt"
            size={34}
            color={activeScreen === "Profile" ? "#f8c145" : "#ffffff"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;
