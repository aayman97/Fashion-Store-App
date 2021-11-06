import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./Screens/Homescreen";
import Productsscreen from "./Screens/Productsscreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Emptyscreen1 from "./Screens/Emptyscreen1";
import Emptyscreen2 from "./Screens/Emptyscreen2";
import {
  Entypo,
  Ionicons,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
var axios = require("axios").default;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { borderTopWidth: 0, backgroundColor: "black" },
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            tabBarIcon: (props) => {
              return (
                <Entypo
                  name="home"
                  size={27}
                  color={props.focused ? "#B2EE32" : "#B4B4B4"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Products"
          component={Productsscreen}
          options={{
            tabBarIcon: (props) => {
              return (
                <Ionicons
                  name="md-grid"
                  size={27}
                  color={props.focused ? "#B2EE32" : "#B4B4B4"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Empty1"
          component={Emptyscreen1}
          options={{
            tabBarIcon: (props) => {
              return (
                <FontAwesome5
                  name="shopping-bag"
                  size={27}
                  color={props.focused ? "#B2EE32" : "#B4B4B4"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Empty2"
          component={Emptyscreen2}
          options={{
            tabBarIcon: (props) => {
              return (
                <SimpleLineIcons
                  name="magnifier"
                  size={27}
                  color={props.focused ? "#B2EE32" : "#B4B4B4"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
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
