import React from "react";
import {
  Image,
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// const mainImg = require("./assets/Rectangle 39999.png");
import main from "./assets/main.png";

const Splash = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground className="h-full" source={require("./assets/main.png")}>
        <View className=" w-full mt-96  flex-1 justify-center ">
          <Text className=" w-full  pb-0 mb-2 font-bold  mt-12  px-12 text-3xl text-[#B272A4]   text-center   ">
            Peace of Mind For Busy Parents{" "}
          </Text>

          <TouchableOpacity onPress={()=>{navigation.push('Home')}}  >
            <Text className='bg-[#B272A4] text-xl mt-2 text-center  p-3 text-white rounded-md mx-auto ' >Let’s Get Started ➡</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
});

export default Splash;
