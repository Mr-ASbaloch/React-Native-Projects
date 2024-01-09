import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Profile = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 text-xl   ">
      <View className="  mx-auto px-4 mt-8 mb-8 border-b-2 pb-1   ">
        <Image
          source={require("./assets/profileDp.png")}
          className="mx-auto "
        />
        <Text className="text-2xl font-semibold text-center mt-3">
          {" "}
          Evelyn Larson{" "}
        </Text>
        <Text> Evelyn.Larsont@example.com </Text>
      </View>

      <View className="flex-1 px-3 h-full pb-4 w-full ">
        <View className="flex-1 flex-row items-center bg-[#e2cadd] mb-3  rounded-lg px-4 justify-between ">
          <Image source={require("./assets/icon1.png")} />
          <Text className="text-xl ">Profile details</Text>
          <AntDesign name="swap" size={23} />
        </View>
        <View className="flex-1 flex-row items-center bg-[#e2cadd] mb-3 rounded-lg  px-4 justify-between ">
          <Image source={require("./assets/icon2.png")} />
          <Text className="text-xl ">Settings</Text>
          <AntDesign name="swap" size={23} />
        </View>
        <View className="flex-1 flex-row items-center bg-[#e2cadd] mb-3 rounded-lg px-4 justify-between ">
          <Image source={require("./assets/icon3.png")} />
          <Text className="text-xl ">Contacts</Text>
          <AntDesign name="swap" size={23} />
        </View>
        <View className="flex-1 flex-row items-center bg-[#e2cadd] mb-3 rounded-lg px-4 justify-between ">
          <Image source={require("./assets/icon4.png")} />
          <Text className="text-xl ">Support</Text>
          <AntDesign name="swap" size={23} />
        </View>
        <View  className="flex-1 flex-row items-center bg-[#e2cadd] mb-3 rounded-lg px-4 justify-between ">
          <Image source={require("./assets/icon5.png")} />
          <Text  className="text-xl ">Logout</Text>
          <AntDesign name="swap" size={23} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
