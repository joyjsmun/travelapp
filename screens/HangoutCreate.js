import React, { useLayoutEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import POAP from "./POAP";
import ZuPass from "./ZuPass";
import NFT from "./NFT";

const HangoutCreate = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("POAP"); // Default active tab

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#F6D268]">
      <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 60 }}>
        <View className="flex-1 p-4">
          {/* Top Section */}
          <View className="mb-4">
            <Text className="text-xl font-bold text-[#121418]">
              Create Your Hangout
            </Text>
            {/* File Upload */}
            {/* <TouchableOpacity onPress={() => navigation.navigate("Hangout")}>
              <Image className="w-full h-40 rounded-lg" source={Map} />
            </TouchableOpacity> */}
          </View>
          {/* Card Section */}
          <View className="flex-1">
            <View className="bg-white rounded-lg p-4 mb-4">
              {/* Create Hangout Detail*/}
              <View className="mb-4">
                <Text className="font-bold mb-4">Hangout Event Name</Text>
                <TextInput
                  placeholder="Event Name"
                  className="border-2 border-[#1B75BC]  p-4  rounded-lg"
                  value={eventName}
                  onChangeText={setEventName}
                />
              </View>
              <View className="mb-4">
                <Text className="font-bold mb-4">Date</Text>
                <TextInput
                  placeholder="Date"
                  className="border-2 border-[#1B75BC]  p-4  rounded-lg"
                  value={date}
                  onChangeText={setDate}
                />
              </View>
              <View className="mb-4">
                <Text className="font-bold mb-4">Location</Text>
                <TextInput
                  placeholder="Choose Location"
                  className="border-2 border-[#1B75BC]  p-4  rounded-lg"
                  value={location}
                  onChangeText={setLocation}
                />
              </View>
              <View className="mb-4">
                <Text className="font-bold mb-4">Description</Text>
                <TextInput
                  placeholder="Description"
                  className="border-2 border-[#1B75BC]  p-4  rounded-lg"
                  value={description}
                  onChangeText={setDescription}
                />
              </View>
              <View className="mb-4">
                <Text className="font-bold mb-4">Number of People</Text>
                <TextInput
                  placeholder="Limit of Number"
                  className=" p-4  border-2 border-[#1B75BC] rounded-lg"
                  value={numberOfPeople}
                  onChangeText={setNumberOfPeople}
                />
              </View>
              {/* Group Tab Filter Menu */}
              <View className="">
                <Text className="font-bold mb-4">Group Tabs</Text>
                <View className="flex-row justify-between mb-4 ">
                  <TouchableOpacity
                    onPress={() => handleTabPress("POAP")}
                    className={`p-4  w-[32%] flex items-center  ${
                      activeTab === "POAP" ? "bg-[#1B75BC]" : "bg-[#ccc]"
                    } rounded`}
                  >
                    <Text className="text-white font-bold">POAP</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTabPress("NFT")}
                    className={`p-4 w-[32%] flex items-center  ${
                      activeTab === "NFT" ? "bg-[#1B75BC]" : "bg-[#ccc]"
                    } rounded`}
                  >
                    <Text className="text-white font-bold">NFT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleTabPress("ZuPass")}
                    className={`p-4 w-[32%] flex items-center ${
                      activeTab === "ZuPass" ? "bg-[#1B75BC]" : "bg-[#ccc]"
                    } rounded`}
                  >
                    <Text className="text-white font-bold">ZuPass</Text>
                  </TouchableOpacity>
                </View>
                {/* Render content based on active tab */}
                {activeTab === "POAP" && <POAP />}
                {activeTab === "NFT" && <NFT />}
                {activeTab === "ZuPass" && <ZuPass />}
              </View>
            </View>
            {/* Tab Menu */}
            {/* Next Button */}
            <TouchableOpacity>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#1B75BC", "#1B75BC"]}
                className="w-full h-16 justify-center items-center rounded-2xl"
              >
                <Text className="text-white font-bold text-xl">Create</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HangoutCreate;
