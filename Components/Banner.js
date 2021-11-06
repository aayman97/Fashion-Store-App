import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import { useFonts } from "expo-font";

const Banner = () => {
  const [loaded] = useFonts({
    RegularFont: require("../assets/Fonts/ZenKakuGothicAntique-Regular.ttf"),
    BoldFont: require("../assets/Fonts/ZenKakuGothicAntique-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View
      style={{
        width,
        height: height * 0.12,
        marginTop: height * 0,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
      }}
    >
      <Text
        style={{
          fontSize: height * 0.035,
          fontFamily: "BoldFont",
          letterSpacing: 2,
          color: "white",
        }}
      >
        New Collection
      </Text>
      <Text
        style={{
          letterSpacing: 1,
          fontFamily: "BoldFont",
          fontSize: height * 0.035,
          color: "white",
        }}
      >
        with{" "}
        <Text
          style={{
            color: "#B2EE32",
          }}
        >
          15%
        </Text>{" "}
        discounts
      </Text>
    </View>
  );
};
export default Banner;
