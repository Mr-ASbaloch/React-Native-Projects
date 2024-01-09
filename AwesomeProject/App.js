import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import Splash from "./Splash";
import Home from "./Home";
import Message from "./Message";
import Profile from "./Profile";

export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
  
      <Stack.Screen   name="App " options={{title:'Baby Care Center ',
      statusBarColor:"#B272A4"
      }}  component={Splash}  />
      <Stack.Screen name="Home"  component={Home}  />
      <Stack.Screen name="Chats"  component={Message}  />
      <Stack.Screen name="Profile"  component={Profile}  />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
