import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import PagerView from "react-native-pager-view";
import TopRate from "./TopRate";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 flex-col">
      <View className=" flex-row  justify-between  mb-2 px-4 flex-wrap mt-4 ">
        <Image source={require("./assets/dp.png")} className="" />
        <View>
          <Text className=" text-xl justify-start ">Hi, John</Text>
          <Text className="mt-3  justify-center ">
            The current location is unknown
          </Text>
        </View>
        <Image source={require("./assets/NOTIFICATION.png")} className="mt-3" />
      </View>
      <View>
        <Text className="text-xl mb-3 text-[#B272A4] text-center font-semibold  ">
          Babysitters nearby
        </Text>
      </View>
      <TopRate />
      {/* <View className="flex-1 flex-col">
        <View className="flex-1 flex-row justify-between px-8">
          <Text className="text-lg ">Top rated</Text>
          <Text className="text-lg text-[#B272A4] ">See All </Text>
        </View>
      </View> */}

      <PagerView
        style={styles.viewPager}
        className="flex-1 mb-1 pb-80  flex-col"
        initialPage={0}
      >
        <View style={styles.page} key="1">
          <View className="   p-6 bg-slate-300 m-4 rounded-md ">
            <View className="flex-1 flex-row  mb-12 justify-center gap-2   flex-wrap  ">
              <Image source={require("./assets/Profile.png")} className="" />
              <View>
                <Text className=" text-xl mt-3 justify-start ">
                  Hi, Krystina
                </Text>
              </View>
            </View>
            <Text className="   mt-3 text-center p-5 ">
              <Text className="text-[#c26db0] font-bold text-xl">Bio:</Text> i’m
              handworker and focused babysitter , i have additional ...
            </Text>

            <View className="">
              <TouchableOpacity
                onPress={() => {
                  navigation.push("Profile");
                }}
              >
                <Text className="text-[#c26db0] rounded-full w-1/2 text-center   font-semibold text-lg border p-1  mx-auto mb-2 border-[#c26db0]">
                  View Profile{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("Chats");
                }}
              >
                <Text className=" rounded-full bg-[#c26db0] text-white text-lg w-1/2 mx-auto p-1 text-center ">
                  Message{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.page} key="2">
          <View className="">
            <View className="   p-6 bg-slate-300 m-4 rounded-md ">
              <View className="flex-1 flex-row  mb-12 justify-center gap-2   flex-wrap  ">
                <Image source={require("./assets/Profile2.png")} className="" />
                <View>
                  <Text className=" text-xl mt-3 justify-start ">
                    Hi, NedStark
                  </Text>
                </View>
              </View>
              {/* <Text className="text-[#c26db0] p-2 text-xl mt-2  ">Plough Close.</Text> */}
              <Text className="   mt-3 text-center p-5 ">
                <Text className="text-[#c26db0] font-bold text-xl">Bio:</Text>
                i’m handworker and focused babysitter , i have additional ...
              </Text>
              <View className="">
                <TouchableOpacity>
                  <Text className="text-[#c26db0] rounded-full w-1/2 text-center  font-semibold text-lg border p-1 mx-auto mb-2 border-[#c26db0]">
                    View Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push("Chats");
                  }}
                >
                  <Text className="rounded-full bg-[#c26db0] text-white text-lg w-1/2 mx-auto p-1 text-center ">
                    Message
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.page} key="3">
          <View className="   p-6 bg-slate-300 m-4 rounded-md ">
            <View className="flex-1 flex-row  mb-12 justify-center gap-2   flex-wrap  ">
              <Image source={require("./assets/Profile.png")} className="" />
              <View>
                <Text className=" text-xl mt-3 justify-start ">
                  Hi, Krystina
                </Text>
              </View>
            </View>
            <Text className="   mt-3 text-center p-5 ">
              <Text className="text-[#c26db0] font-bold text-xl">Bio:</Text> i’m
              handworker and focused babysitter , i have additional ...
            </Text>
            <View className=" ">
              <TouchableOpacity>
                <Text className="text-[#c26db0] rounded-full w-1/2 text-center  font-semibold text-lg border p-1 mx-auto mb-2 border-[#c26db0]">
                  View Profile{" "}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("Chats");
                }}
              >
                <Text className="rounded-full bg-[#c26db0] text-white text-lg   w-1/2 mx-auto p-2 text-center ">
                  Message{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PagerView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default Home;
