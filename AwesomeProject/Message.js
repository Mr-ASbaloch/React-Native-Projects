import React, { useState } from "react";
import { Text, View, Image, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const Message = () => {
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView className="flex-1 flex-col justify-center align-middle ">
      <View className="text-[#D8B8D1] bg-[#D8B8D1] px-5 m-5 p-3 rounded-lg">
        <Text className="text-white text-2xl text-center font-semibold  ">
          <Ionicons name="search" size={22} /> search .....
        </Text>
      </View>
      <View className="flex-1 flex-col">
        <View className="flex-1 flex-col justify-between mb-4 px-10 bg-gray-300 p-3 mx-4 rounded-xl">
          <View className="flex-1 flex-row justify-between px-5">
            <Image
              source={require("./assets/Rectangle.png")}
              className="rounded-full "
            />
            <View className="mt-2 p-1">
              <Text>Carole Howell $20 /Hr</Text>
              <Text className="text-blue-600 font-semibold">Just Now</Text>
            </View>
          </View>
          <View>
            <Text>
              Horem ipsum dolor sit amet, for new consectetur and adipiscing
              elit.
            </Text>
          </View>
        </View>
        <View className="flex-1 flex-col justify-between mb-4 px-10 bg-gray-300 p-3 mx-4 rounded-xl">
          <View className="flex-1 flex-row justify-between px-5">
            <Image
              source={require("./assets/Profile.png")}
              className="rounded-full "
            />
            <View className="mt-2 p-1">
              <Text>Carole Howell $20 /Hr</Text>
              <Text className="text-blue-600 font-semibold">12 hours</Text>
            </View>
          </View>
          <View>
            <Text>
              Horem ipsum dolor sit amet, for new consectetur and adipiscing
              elit.
            </Text>
          </View>
        </View>
        <View className="flex-1 flex-col justify-between mb-4 px-10 bg-gray-300 p-3 mx-4 rounded-xl">
          <View className="flex-1 flex-row justify-between px-5">
            <Image
              source={require("./assets/Profile3.png")}
              className="rounded-full "
            />
            <View className="mt-2 p-1">
              <Text>Carole Howell $20 /Hr</Text>
              <Text className="text-blue-600 font-semibold">yesterday</Text>
            </View>
          </View>
          <View>
            <Text>
              Horem ipsum dolor sit amet, for new consectetur and adipiscing
              elit.
            </Text>
          </View>
        </View>
        <View className="flex-1 flex-col justify-between mb-4 px-10 bg-gray-300 p-3 mx-4 rounded-xl">
          <View className="flex-1 flex-row justify-between px-5">
            <Image
              source={require("./assets/Profile2.png")}
              className="rounded-full "
            />
            <View className="mt-2 p-1">
              <Text>Carole Howell $20 /Hr</Text>
              <Text className="text-blue-600 font-semibold">yesterday</Text>
            </View>
          </View>
          <View>
            <Text>
              Horem ipsum dolor sit amet, for new consectetur and adipiscing
              elit.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Message;
