import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Hangout1, Hangout2, Hangout3, Hangout4 } from "../assets/images";
import SwipeButton from "../components/SwipeButton";

const Hangout = () => {
  const navigation = useNavigation();
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
            <Text className="text-[#121418] font-bold text-base">Gm, Joy</Text>
            <TouchableOpacity
              className="flex-row"
              onPress={() => navigation.navigate("Setting")}
            >
              <View className="flex flex-row items-center">
                <MaterialIcons name="my-location" size={16} color="#121418" />
                <Text className="text-[#121418] font-medium text-base ml-2">
                  Current Location : Bali
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Popular Hangout*/}
          <View className="flex space-y-2">
            <View className="flex flex-row justify-between">
              <Text className="text-[#121418] font-medium text-lg">
                Popular Hangout
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("HangoutCreate")}
                className="flex flex-row items-center"
              >
                <Ionicons name="create-outline" size={26} color={"#FF5757"} />
                <Text className="font-semibold text-red-500">
                  Create Hangout
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("HangoutDetail")}
            >
              <Image
                className="w-full h-40  mb-2 rounded-lg"
                source={Hangout4}
              />
            </TouchableOpacity>
          </View>
          {/* Gated Hangout*/}
          <View style={{ marginBottom: 20 }}>
            <Text className=" text-[#121418] font-medium text-lg mb-4">
              Your NFT/POAP can attend these
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
              <TouchableOpacity
                style={{ width: "48%", marginBottom: 4 }}
                onPress={() => navigation.navigate("HangoutDetail")}
              >
                <Image
                  style={{ width: "100%", height: 200, borderRadius: 10 }}
                  source={Hangout1}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: "48%", marginBottom: 4 }}
                onPress={() => navigation.navigate("HangoutDetail")}
              >
                <Image
                  style={{ width: "100%", height: 200, borderRadius: 10 }}
                  source={Hangout2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: "48%", marginBottom: 4 }}
                onPress={() => navigation.navigate("HangoutDetail")}
              >
                <Image
                  style={{ width: "100%", height: 200, borderRadius: 10 }}
                  source={Hangout3}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ width: "48%", marginBottom: 4 }}
                onPress={() => navigation.navigate("HangoutDetail")}
              >
                <Image
                  style={{ width: "100%", height: 200, borderRadius: 10 }}
                  source={Hangout4}
                />
              </TouchableOpacity>
            </View>
          </View>
          <SwipeButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hangout;
