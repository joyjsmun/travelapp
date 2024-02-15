import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient from expo-linear-gradient

const SwipeButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HangoutSwipe")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        className="bg-[#FF5757]"
        style={{
          width: "98%",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <Text className="text-white font-bold text-2xl">Swipe Hangout</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SwipeButton;
