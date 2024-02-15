import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./screens/StartScreen";
import Home from "./screens/Home";
import { BottomTab, TopLogo } from "./components";
import React, { useEffect, useState } from "react";
import {
  AcceptRequest,
  Hangout,
  HangoutCreate,
  HangoutDetail,
  Onboarding,
  Profile,
  SafetyTime,
  SafetyTimer,
  SupportConfirm,
  SupportRequestInfo,
  SupportStatus,
  WalkConfirm,
  WalkRequestInfo,
} from "./screens";
import HangoutSwipe from "./screens/HangoutSwipe";
import WalkStatus from "./screens/WalkStatus";
import POAP from "./screens/POAP";

const Stack = createNativeStackNavigator();

const MyComponent = ({ setActiveScreen }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentScreen = navigation.getCurrentRoute().name;
      setActiveScreen(currentScreen);
      console.log("Active Screen :", currentScreen);
      console.log("Active Screen (MyComponent):", currentScreen);
    });
    return unsubscribe;
  }, [navigation]);
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState("");
  console.log("Active Screen (App):", activeScreen);

  return (
    <NavigationContainer>
      <MyComponent setActiveScreen={setActiveScreen} />

      <Stack.Navigator>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
        {/* hangout */}
        <Stack.Screen name="Hangout" component={Hangout} />
        <Stack.Screen name="HangoutDetail" component={HangoutDetail} />
        <Stack.Screen name="HangoutSwipe" component={HangoutSwipe} />
        <Stack.Screen name="HangoutCreate" component={HangoutCreate} />
        {/* Walk to home */}
        <Stack.Screen name="WalkRequestInfo" component={WalkRequestInfo} />
        <Stack.Screen name="WalkConfirm" component={WalkConfirm} />
        <Stack.Screen name="WalkStatus" component={WalkStatus} />
        {/* support */}
        <Stack.Screen
          name="SupportRequestInfo"
          component={SupportRequestInfo}
        />
        <Stack.Screen name="SupportConfirm" component={SupportConfirm} />
        <Stack.Screen name="SupportStatus" component={SupportStatus} />
        {/* Accept Request */}
        <Stack.Screen name="AcceptRequest" component={AcceptRequest} />
        {/* Safety Timer */}
        <Stack.Screen name="SafetyTimer" component={SafetyTimer} />
        {/* Profile */}
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

      {/* Group tabs */}
      <Stack.Screen name="POAP" component={POAP} />
      {activeScreen !== "Start" && <TopLogo activeScreen={activeScreen} />}
      {activeScreen !== "Start" && <BottomTab activeScreen={activeScreen} />}
    </NavigationContainer>
  );
}
