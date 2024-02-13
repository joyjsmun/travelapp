import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import React, {
  useLayoutEffect,
  useCallback,
  useState,
  useEffect,
} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Avatar1, Avatar2, LogoImage, Map } from "../assets/images";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "../components/Modal";
import { TextInput } from "react-native";

const SafetyTimer = () => {
  const navigation = useNavigation();
  const [isSafetyTimeModal, setIsSafetyTimeModal] = useState(false);
  // const [circle1Scale] = useState(new Animated.Value(1));
  // const [circle2Scale] = useState(new Animated.Value(1));
  const [circle3Scale] = useState(new Animated.Value(1));
  const [timer, setTimer] = useState(10);

  const animateCircles = () => {
    Animated.sequence([
      // Animated.timing(circle1Scale, {
      //   toValue: 0,
      //   duration: 2000,
      //   useNativeDriver: true,
      // }),
      // Animated.timing(circle2Scale, {
      //   toValue: 0,
      //   duration: 2000,
      //   useNativeDriver: true,
      // }),
      Animated.timing(circle3Scale, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Reset circle animation after completion
      // circle1Scale.setValue(1);
      // circle2Scale.setValue(1);
      circle3Scale.setValue(1);
      animateCircles();
    });
  };

  useEffect(() => {
    animateCircles(); // Start circle animation on component mount
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        // Decrement timer every second
        if (prevTimer === 0) {
          clearInterval(timerInterval); // Stop the timer when it reaches 00:00
          onSafetyTimeModal();
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timerInterval); // Clear interval on component unmount
  }, []);

  const onSafetyTimeModal = useCallback(() => {
    setIsSafetyTimeModal(!isSafetyTimeModal);
  }, [isSafetyTimeModal]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  animateCircles();
  return (
    <SafeAreaView className="bg-[#F6D268] flex-1 relative">
      <ScrollView contentContainerStyle={{ padding: 12, paddingBottom: 60 }}>
        <View className="pt-4 px-4 flex space-y-4 ">
          {/* Safety Time Countdown */}
          <View className="flex space-y-4">
            <TouchableOpacity
              onPress={() => navigation.navigate("Hangout")}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <View
                className=" h-52 w-52 border-2 border-blue-500 rounded-full"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Animated.View
                  style={{
                    // transform: [{ scale: circle2Scale }],
                    height: "100%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    className=" h-44 w-44 border-2 border-green-500 rounded-full"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Animated.View
                      style={{
                        transform: [{ scale: circle3Scale }],
                        height: "110%",
                        width: "110%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        className=" h-36 w-36 bg-red-500 rounded-full"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text className="text-3xl font-bold text-white">
                          {timer < 10 ? `00:0${timer}` : `00:${timer}`}
                        </Text>
                      </View>
                    </Animated.View>
                  </View>
                </Animated.View>
              </View>
            </TouchableOpacity>
          </View>
          {/* Card 
          {/* Card Section */}
          {/* Status */}
          <View className="rounded-lg bg-[#F2F2F2] p-4 flex space-y-6">
            {/* tags */}

            <View className="flex space-y-2">
              <Text className="font-bold">Status</Text>
              <Text className="font-bold text-[#FF5757]">
                Please tap the timer if you have already arrived home safely.
              </Text>
            </View>
            {/* Current Location */}
            <View className="flex space-y-2">
              <View className="flex flex-row justify-between">
                <Text className="font-bold">User Last Location</Text>
                <Text className="text-xl font-bold text-red-500">
                  {" "}
                  {timer < 10 ? `00:0${timer}` : `00:${timer}`} left
                </Text>
              </View>
              <View className=" rounded-3xl bg-[#dcd9e2] px-4 py-4 flex flex-row items-center space-x-3">
                <Ionicons name="location-outline" size={30} color="#121418" />
                <Text className="text-base"> 2321st, Bogota, Columbia</Text>
              </View>
            </View>
            {isSafetyTimeModal && (
              <Modal
                onClickToggleModal={onSafetyTimeModal}
                className="flex space-y-2 h-auto"
              >
                <Text className="font-bold text-lg pb-2">
                  User Personal Information
                </Text>
                <Text className="font-bold leading-5 text-red-500 mb-2">
                  Your safety timer has expired. Your personal information has
                  been sent to the Buddy Guard to help with your rescue.{" "}
                </Text>
                <View className="bg-yellow-400 w-30 h-34 mb-3 flex justify-center space-y-2 p-3 rounded-lg">
                  <Text className="font-bold">Full Name : Nadia Lee</Text>
                  <Text className="font-bold">
                    Contact Number : 987-232-1829
                  </Text>
                  <Text className="font-bold">
                    Last Location: 1212st, Bogota, Colombia
                  </Text>
                  <Text className="font-bold">
                    Personal Contact: 987)456-1877
                  </Text>
                </View>
                <View className="my-3">
                  <Text className="text-red-500 font-bold leading-5 ">
                    Help will be on the way soon. If you are safe, please
                    contact your buddy group to inform them of your status!
                  </Text>
                </View>
                {/* <TextInput
                    placeholder="Full Name"
                    className="p-4 my-2 border-2 border-green-600 rounded-lg"
                  /> */}
                {/* Add additional input fields as needed */}
                <TouchableOpacity
                  onPress={() => {
                    onSafetyTimeModal();
                  }}
                  style={{
                    backgroundColor: "#FF5757",
                    padding: 12,
                    borderRadius: 8,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#E5E7ED",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    Close
                  </Text>
                </TouchableOpacity>
              </Modal>
            )}

            {/* Buddy Guard Near User */}
            <View className="flex flex-row justify-between">
              <View className="flex space-y-2">
                <Text className="font-bold mb-2">
                  Your Personal Information Will be delivered
                </Text>
                <View className="w-full flex flex-row justify-around">
                  <TouchableOpacity>
                    <View>
                      <Image
                        className="w-14 h-14 rounded-full relative"
                        source={LogoImage}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      className="w-14 h-14 rounded-full relative"
                      source={Avatar1}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      className="w-14 h-14 rounded-full relative"
                      source={Avatar2}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* Bottom Menu */}
            <View className="flex flex-row justify-around items-center">
              {/* <View>
                  <FontAwesome name="commenting" size={50} color={"#CAC6D1"} />
                </View> */}

              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#FF5757", "#FF5757"]}
                  style={{
                    width: 140,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                    paddingHorizontal: 15,
                  }}
                >
                  <Text className="text-[#E5E7ED] font-bold text-2xl">
                    Cancel
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#4F9171", "#4F9171"]}
                  style={{
                    width: 140,
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 25,
                    paddingHorizontal: 15,
                  }}
                >
                  <Text className="text-[#E5E7ED] font-bold text-2xl">
                    Arrived
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

export default SafetyTimer;
