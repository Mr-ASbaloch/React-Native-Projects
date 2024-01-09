import React from "react";
import { ScrollView, View, Text, Image } from "react-native";

const TopRate = () => {
  return (
    <ScrollView className="mb-10 mt-2 flex-col ">
      <View className="flex-1 flex-row justify-between mb-4 px-10 bg-gray-300 p-3 mx-4 rounded-xl">
        <Image
          source={require("./assets/Rectangle.png")}
          className="rounded-full "
        />
        <View className="mt-2 p-1">
          <Text>Carole Howell $20 /Hr</Text>
          <Text className="text-blue-600 font-semibold">4.9 / 808 reviews</Text>
        </View>
      </View>
      <View className="flex-1 flex-row justify-between px-10 bg-gray-300 p-3 mx-4 rounded-xl">
        <Image source={require("./assets/dp.png")} className="rounded-full " />
        <View className="mt-2 p-1">
          <Text>Carole Howell $20 /Hr</Text>
          <Text className="text-blue-600 font-semibold">4.9 / 808 reviews</Text>
        </View>
      </View>
      <View className="flex-1 flex-row justify-between px-10 mt-3 bg-gray-300 p-3 mx-4 rounded-xl">
        <Image
          source={require("./assets/Rectangle.png")}
          className="rounded-full "
        />
        <View className="mt-2 p-1">
          <Text>Carole Howell $20 /Hr</Text>
          <Text className="text-blue-600 font-semibold">4.9 / 808 reviews</Text>
        </View>
      </View>
      <View className="flex-1 flex-row justify-between mb-4 mt-2 px-10 bg-gray-300 p-3 mx-4 rounded-xl">
        <Image
          source={require("./assets/Rectangle.png")}
          className="rounded-full "
        />
        <View className="mt-2 p-1">
          <Text>Carole Howell $20 /Hr</Text>
          <Text className="text-blue-600 font-semibold">4.9 / 808 reviews</Text>
        </View>
      </View>
      <View className="flex-1 flex-row justify-between mb-4 mt-3 px-10 bg-gray-300 p-3 mx-4 rounded-xl">
        <Image
          source={require("./assets/Rectangle.png")}
          className="rounded-full "
        />
        <View className="mt-2 p-1">
          <Text>Carole Howell $20 /Hr</Text>
          <Text className="text-blue-600 font-semibold">4.9 / 808 reviews</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TopRate;
