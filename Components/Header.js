import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");

const Header = () => {
  return (
    <View
      style={{
        width,
        height: height * 0.08,
        marginTop: height * 0.04,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: height * 0.02,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity>
        <Feather name="menu" size={height * 0.04} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            width: height * 0.08 * 0.6,
            height: height * 0.08 * 0.6,
            backgroundColor: "white",
            borderRadius: height * 0.08 * 0.8,
          }}
        >
          <Image
            source={require("../assets/avatar.png")}
            style={{ resizeMode: "cover", width: "100%", height: "100%" }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Header;
